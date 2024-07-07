import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {
  password: string = '';
  length: number = 14;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = false;

  ngOnInit(): void {
    this.generatePassword();
  }

  generatePassword() {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '@#$%^&*()_+~|}{[]></-=';

    let chars = '';
    if (this.includeUppercase) chars += uppercase;
    if (this.includeLowercase) chars += lowercase;
    if (this.includeNumbers) chars += numbers;
    if (this.includeSymbols) chars += symbols;

    this.password = Array(this.length)
      .fill('')
      .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
      .join('');
  }

  copyPassword() {
    navigator.clipboard.writeText(this.password);
    // You can add a toast notification here
  }

  incrementLength() {
    if (this.length < 50) this.length++;
    this.generatePassword();
  }

  decrementLength() {
    if (this.length > 1) this.length--;
    this.generatePassword();
  }

  getPasswordStrength(): { text: string, time: string } {
    // This is a simplified estimation. In a real-world scenario, you'd use a more complex algorithm.
    const base = 26 + 26 + 10 + 33; // total possible characters
    const possibilities = Math.pow(base, this.length);
    const secondsToCrack = possibilities / 1000000000; // assuming 1 billion guesses per second

    if (secondsToCrack < 3600) {
      return { text: 'WEAK', time: 'less than an hour' };
    } else if (secondsToCrack < 86400) {
      return { text: 'MODERATE', time: 'less than a day' };
    } else if (secondsToCrack < 31536000) {
      return { text: 'STRONG', time: 'less than a year' };
    } else {
      const years = Math.floor(secondsToCrack / 31536000);
      return { text: 'VERY STRONG', time: `${years.toLocaleString()} years` };
    }
  }
}