import { Component } from '@angular/core';

@Component({
  selector: 'app-text-repeater',
  templateUrl: './text-repeater.component.html',
  styleUrls: ['./text-repeater.component.scss']
})
export class TextRepeaterComponent {
  inputText: string = '';
  repeatTimes: number = 5;
  delimiter: string = '';
  newLine: boolean = true;
  outputText: string = '';

  repeatText() {
    let repeatedText = '';
    for (let i = 0; i < this.repeatTimes; i++) {
      repeatedText += this.inputText;
      if (i < this.repeatTimes - 1) {
        if (this.newLine) {
          repeatedText += '\n';
        } else {
          repeatedText += this.delimiter;
        }
      }
    }
    this.outputText = repeatedText;
  }

  clearText() {
    this.inputText = '';
    this.outputText = '';
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.outputText).then(() => {
      console.log('Output copied to clipboard');
    });
  }

  incrementRepeat() {
    this.repeatTimes++;
  }

  decrementRepeat() {
    if (this.repeatTimes > 1) {
      this.repeatTimes--;
    }
  }
}
