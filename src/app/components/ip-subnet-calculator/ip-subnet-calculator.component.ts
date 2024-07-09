import { Component } from '@angular/core';
import { getResult } from './utils';

interface Result {
  key: string;
  name: string;
  value: string | number;
}

@Component({
  selector: 'app-ip-subnet-calculator',
  templateUrl: './ip-subnet-calculator.component.html',
  styleUrls: ['./ip-subnet-calculator.component.scss']
})
export class IpSubnetCalculatorComponent {
  inputValue: string = '';
  bits: number[] =  [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  selectedOption: number = 32;
  result: Result[] = [];
  error: string | null = null;

  handleInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const isCIDRNotation = value.includes('/');

    if (isCIDRNotation) {
      const subnet = parseInt(value.split('/')[1]);
      if (subnet >= 1 && subnet <= 32) {
        this.selectedOption = subnet;
      }
    } else {
      this.selectedOption = 32;
    }
    this.inputValue = value.replace(/\/\d*$/, '');

    if (this.isValidIPAddress(this.inputValue)) {
      this.error = null;
    }
  }

  onSubmitCalculate(): void {
    if (!this.inputValue.trim()) {
      this.error = 'Please enter a valid IPv4.';
      return;
    }
    if (!this.isValidIPAddress(this.inputValue)) {
      this.error = 'Invalid IPv4.';
      return;
    }
    this.error = null;
    this.result = getResult(this.inputValue, this.selectedOption);
  }

  isValidIPAddress(ip: string): boolean {
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    return ipv4Regex.test(ip);
  }
}
