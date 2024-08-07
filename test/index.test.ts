import { Calendar } from '../src/index';

describe('Calendar', () => {
  it('should generate the correct number of days for a month', () => {
    const calendar = new Calendar(2024, 8); // August 2024
    expect(calendar.getDaysInMonth()).toBe(31);
  });

  it('should generate a correct calendar for a month', () => {
    const calendar = new Calendar(2024, 8); // August 2024
    expect(calendar.generateCalendar()).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']);
  });
});
