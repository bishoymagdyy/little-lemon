import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './components/bookingForm';
import BookingPage from './components/bookingPage';



test('render booking form label' , () => {
  render(<BookingForm />);
  const labelElement = screen.getByLabelText(/Name/i);
  expect(labelElement).toBeInTheDocument();


  const ButtonElement = screen.getByRole("button")
  fireEvent.click(ButtonElement);
})




export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    default:
      return state;
  }
};

describe('Reducer Functions', () => {
  test('initializeTimes returns correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  test('updateTimes returns the same times regardless of date', () => {
    const mockState = ['17:00', '18:00'];
    const mockAction = { type: 'UPDATE_TIMES', date: '2023-05-20' };
    const result = updateTimes(mockState, mockAction);
    expect(result).toEqual(initializeTimes());
  });
});

describe('BookingForm', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  test('renders all form fields', () => {
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('form submission works correctly', () => {
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2023-05-20' } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'anniversary' } });

    fireEvent.click(screen.getByRole('button'));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      name: 'John Doe',
      date: '2023-05-20',
      time: '18:00',
      guest: '4',
      occasion: 'anniversary'
    });
  });

  test('dispatches action when date changes', () => {
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2023-05-20' } });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      date: '2023-05-20'
    });
  });



  test('disables submit button when required fields are empty', () => {
    expect(screen.getByRole('button')).toBeDisabled();
  });
});



describe('BookingPage', () => {
  test('renders booking page with form', () => {
    // Mock the useReducer hook
    jest.spyOn(require('react'), 'useReducer').mockImplementation(() => [
      ['17:00', '18:00', '19:00'],
      jest.fn()
    ]);

    render(<BookingPage />);
    expect(screen.getByRole('heading', { name: /book a table/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });
});