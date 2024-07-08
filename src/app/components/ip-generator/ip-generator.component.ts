import { Component } from '@angular/core';

@Component({
  selector: 'app-ip-generator',
  templateUrl: './ip-generator.component.html',
  styleUrls: ['./ip-generator.component.scss']
})
export class IpGeneratorComponent {
  numberOfIPs = 5;
  ipClasses = ['A', 'B', 'C', 'D', 'E'];
  selectedClass = 'A';
  generatedIPs = '';

  incrementIPs() {
    this.numberOfIPs++;
  }

  decrementIPs() {
    if (this.numberOfIPs > 1) this.numberOfIPs--;
  }

  generateIPs() {
    this.generatedIPs = '';
    for (let i = 0; i < this.numberOfIPs; i++) {
      this.generatedIPs += this.generateIP() + '\n';
    }
  }

  generateIP(): string {
    let ip = '';
    switch (this.selectedClass) {
      case 'A':
        ip = `${this.getRandomInt(1, 126)}.${this.getRandomInt(0, 255)}.${this.getRandomInt(0, 255)}.${this.getRandomInt(1, 254)}`;
        break;
      case 'B':
        ip = `${this.getRandomInt(128, 191)}.${this.getRandomInt(0, 255)}.${this.getRandomInt(0, 255)}.${this.getRandomInt(1, 254)}`;
        break;
      case 'C':
        ip = `${this.getRandomInt(192, 223)}.${this.getRandomInt(0, 255)}.${this.getRandomInt(0, 255)}.${this.getRandomInt(1, 254)}`;
        break;
      case 'D':
        ip = `${this.getRandomInt(224, 239)}.${this.getRandomInt(0, 255)}.${this.getRandomInt(0, 255)}.${this.getRandomInt(1, 254)}`;
        break;
      case 'E':
        ip = `${this.getRandomInt(240, 255)}.${this.getRandomInt(0, 255)}.${this.getRandomInt(0, 255)}.${this.getRandomInt(1, 254)}`;
        break;
    }
    return ip;
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedIPs);
  }

  clearText() {
    this.generatedIPs = '';
  }
}