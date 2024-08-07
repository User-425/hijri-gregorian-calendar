export class Calendar {
    private month: number;
    private year: number;
  
    constructor(year: number, month: number) {
      this.year = year;
      this.month = month;
    }
  
    public getDaysInMonth(): number {
      return new Date(this.year, this.month, 0).getDate();
    }
  
    public generateCalendar(): string[] {
      const days: string[] = [];
      const totalDays = this.getDaysInMonth();
      for (let day = 1; day <= totalDays; day++) {
        days.push(day.toString());
      }
      return days;
    }
  
    public printCalendar(): void {
      const days = this.generateCalendar();
      console.log(`Calendar for ${this.month}/${this.year}`);
      console.log(days.join(' '));
    }
  }