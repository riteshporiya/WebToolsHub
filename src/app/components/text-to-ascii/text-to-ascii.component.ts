import { Component } from '@angular/core';

@Component({
  selector: 'app-text-to-ascii',
  templateUrl: './text-to-ascii.component.html',
  styleUrls: ['./text-to-ascii.component.scss']
})
export class TextToAsciiComponent {
  inputText: string = '';
  outputText: string = '';
  inputFormat: string = 'text';
  outputFormat: string = 'ascii';
  errorMessage: string = '';

  convert() {
    this.errorMessage = '';
    if (!this.isValidInput(this.inputText, this.inputFormat)) {
      this.errorMessage = `Invalid input. Please enter a valid ${this.inputFormat} value.`;
      return;
    }

    const intermediateText = this.convertToText(this.inputText, this.inputFormat);
    this.outputText = this.convertFromText(intermediateText, this.outputFormat);
  }

  private convertToText(input: string, format: string): string {
    switch (format) {
      case 'text':
        return input;
      case 'binary':
        return input.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
      case 'hex':
        return input.split(' ').map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
      case 'ascii':
        return input.split(',').map(ascii => String.fromCharCode(parseInt(ascii.trim()))).join('');
      default:
        return input;
    }
  }

  private convertFromText(input: string, format: string): string {
    switch (format) {
      case 'text':
        return input;
      case 'binary':
        return input.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
      case 'hex':
        return input.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
      case 'ascii':
        return input.split('').map(char => char.charCodeAt(0)).join(',');
      default:
        return input;
    }
  }

  private isValidInput(input: string, format: string): boolean {
    switch (format) {
      case 'text':
        return true; // Text input is always valid
      case 'binary':
        return this.isValidBinaryInput(input);
      case 'hex':
        return this.isValidHexInput(input);
      case 'ascii':
        return this.isValidAsciiInput(input);
      default:
        return true; // Unknown format, assume input is valid
    }
  }

  private isValidBinaryInput(input: string): boolean {
    const binaryValues = input.split(' ');
    for (const binaryValue of binaryValues) {
      if (binaryValue.length !== 8 || !/^[01]+$/.test(binaryValue)) {
        return false;
      }
    }
    return true;
  }

  private isValidHexInput(input: string): boolean {
    const hexValues = input.split(' ');
    for (const hexValue of hexValues) {
      if (hexValue.length !== 2 || !/^[0-9A-Fa-f]+$/.test(hexValue)) {
        return false;
      }
    }
    return true;
  }

  private isValidAsciiInput(input: string): boolean {
    const asciiValues = input.split(',');
    for (const asciiValue of asciiValues) {
      if (isNaN(parseInt(asciiValue.trim())) || parseInt(asciiValue.trim()) < 0 || parseInt(asciiValue.trim()) > 255) {
        return false;
      }
    }
    return true;
  }


  copyToClipboard() {
    navigator.clipboard.writeText(this.outputText).then(() => {
      console.log('Output copied to clipboard');
    });
  }

  clearText() {
    this.inputText = '';
    this.outputText = '';
  }
}