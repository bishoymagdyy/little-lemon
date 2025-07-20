import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './components/bookingForm';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// Mock props
const mockProps = {
  availableTimes: ['17:00', '18:00'],
  dispatch: jest.fn(),
  submitForm: jest.fn(),
};

describe('BookingForm HTML attributes', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <BookingForm {...mockProps} />
      </MemoryRouter>
    );
  });

  it('should have correct attributes for name input', () => {
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toHaveAttribute('id', 'name');
    expect(nameInput).toHaveAttribute('name', 'name');
  });

  it('should have correct attributes for date input', () => {
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'date');
    expect(dateInput).toHaveAttribute('name', 'date');
  });

  it('should have correct attributes for time select', () => {
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveAttribute('id', 'time');
    expect(timeSelect).toHaveAttribute('name', 'time');
  });

  it('should have correct attributes for guest input', () => {
    const guestInput = screen.getByLabelText(/number of guests/i);
    expect(guestInput).toHaveAttribute('type', 'number');
    expect(guestInput).toHaveAttribute('id', 'guest');
    expect(guestInput).toHaveAttribute('name', 'guest');
    expect(guestInput).toHaveAttribute('min', '1');
    expect(guestInput).toHaveAttribute('maxLength', '10');
  });

  it('should have correct attributes for occasion select', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    expect(occasionSelect).toHaveAttribute('name', 'occasion');
  });
});

// --- JavaScript validation function tests ---
const validate = (fields) => {
  const errors = {};
  if (!fields.name) {
    errors.name = 'Please enter a name';
  } else if (fields.name.length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }
  if (!fields.date) errors.date = 'Please select a date';
  if (!fields.time) errors.time = 'Please select a time';
  if (!fields.guest || fields.guest < 1) errors.guest = 'At least 1 guest required';
  if (!fields.occasion) errors.occasion = 'Please select an occasion';
  return errors;
};

describe('BookingForm validate function', () => {
  it('returns no errors for valid input', () => {
    const valid = {
      name: 'John Doe',
      date: '2025-07-20',
      time: '18:00',
      guest: 2,
      occasion: 'birthday',
    };
    expect(validate(valid)).toEqual({});
  });

  it('returns errors for missing fields', () => {
    const invalid = {
      name: '',
      date: '',
      time: '',
      guest: '',
      occasion: '',
    };
    expect(validate(invalid)).toEqual({
      name: 'Please enter a name',
      date: 'Please select a date',
      time: 'Please select a time',
      guest: 'At least 1 guest required',
      occasion: 'Please select an occasion',
    });
  });

  it('returns error for short name', () => {
    const invalid = {
      name: 'Al',
      date: '2025-07-20',
      time: '18:00',
      guest: 2,
      occasion: 'birthday',
    };
    expect(validate(invalid)).toHaveProperty('name', 'Name must be at least 3 characters');
  });

  it('returns error for guest < 1', () => {
    const invalid = {
      name: 'John Doe',
      date: '2025-07-20',
      time: '18:00',
      guest: 0,
      occasion: 'birthday',
    };
    expect(validate(invalid)).toHaveProperty('guest', 'At least 1 guest required');
  });
});

describe('BookingForm form submission and input validation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows errors and does not submit with empty fields', async () => {
    render(
      <MemoryRouter>
        <BookingForm {...mockProps} />
      </MemoryRouter>
    );
    userEvent.click(screen.getByRole('button'));

    expect(await screen.findByText(/please enter a name/i)).toBeInTheDocument();
    expect(await screen.findByText(/please select a date/i)).toBeInTheDocument();
    expect(await screen.findByText(/please select a time/i)).toBeInTheDocument();
    expect(await screen.findByText(/at least 1 guest required/i)).toBeInTheDocument();
    expect(await screen.findByText(/please select an occasion/i)).toBeInTheDocument();
    expect(mockProps.submitForm).not.toHaveBeenCalled();
  });

  it('shows error for short name and clears when valid', async () => {
    render(
      <MemoryRouter>
        <BookingForm {...mockProps} />
      </MemoryRouter>
    );
    const nameInput = screen.getByLabelText(/name/i);
    userEvent.clear(nameInput);
    userEvent.type(nameInput, 'Al');
    nameInput.blur();
    expect(await screen.findByText(/name must be at least 3 characters/i)).toBeInTheDocument();

    userEvent.clear(nameInput);
    userEvent.type(nameInput, 'Alex');
    nameInput.blur();
    expect(screen.queryByText(/name must be at least 3 characters/i)).not.toBeInTheDocument();
  });

  it('submits the form when all fields are valid', async () => {
    render(
      <MemoryRouter>
        <BookingForm {...mockProps} />
      </MemoryRouter>
    );
    userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    userEvent.type(screen.getByLabelText(/date/i), '2025-07-20');
    userEvent.selectOptions(screen.getByLabelText(/time/i), '17:00');
    userEvent.clear(screen.getByLabelText(/number of guests/i));
    userEvent.type(screen.getByLabelText(/number of guests/i), '2');
    userEvent.selectOptions(screen.getByLabelText(/occasion/i), 'birthday');

    userEvent.click(screen.getByRole('button'));

    // Wait for submitForm to be called
    await screen.findByRole('button', { name: /submit/i });
    expect(mockProps.submitForm).toHaveBeenCalledWith({
      name: 'John Doe',
      date: '2025-07-20',
      time: '17:00',
      guest: '2',
      occasion: 'birthday',
    });
  });
});
