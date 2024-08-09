import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss'],
})
export class AgeCalculatorComponent {
  dateOfBirth: string = '';
  ageAtDate: string = new Date().toISOString().substring(0, 10);
  ageResult: any;

  calculateAge() {
    const dob = new Date(this.dateOfBirth);
    const ageDate = new Date(this.ageAtDate);

    let years = ageDate.getFullYear() - dob.getFullYear();
    let months = ageDate.getMonth() - dob.getMonth();
    let days = ageDate.getDate() - dob.getDate();

    // Adjust the calculations for months and days
    if (days < 0) {
      months -= 1;
      days += new Date(ageDate.getFullYear(), ageDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    // Calculate additional time units
    const diffTime = ageDate.getTime() - dob.getTime();
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    this.ageResult = {
      years,
      months,
      days,
      totalMonths: years * 12 + months,
      totalWeeks,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
    };
  }
}
