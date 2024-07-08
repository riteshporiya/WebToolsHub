import { Component } from '@angular/core';

@Component({
  selector: 'app-string-generator',
  templateUrl: './string-generator.component.html',
  styleUrls: ['./string-generator.component.scss']
})
export class StringGeneratorComponent {
  length:number = 16;
  count: number = 5;
  useUppercase: boolean = true;
  useLowercase: boolean = true;
  useNumbers: boolean = true;
  useSymbols: boolean = false;
  generatedStrings: string = '';

  incrementLength() {
    this.length++;
  }

  decrementLength() {
    if (this.length > 1) this.length--;
  }

  incrementCount() {
    this.count++;
  }

  decrementCount() {
    if (this.count > 1) this.count--;
  }

  generateStrings() {
    let charset = '';
    if (this.useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (this.useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (this.useNumbers) charset += '0123456789';
    if (this.useSymbols) charset += '@#$&';

    if (charset === '') {
      this.generatedStrings = 'Please select at least one character set.';
      return;
    }

    this.generatedStrings = '';
    for (let i = 0; i < this.count; i++) {
      let result = '';
      for (let j = 0; j < this.length; j++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      this.generatedStrings += result + '\n';
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedStrings);
  }

  clearText() {
    this.generatedStrings = '';
  }
}