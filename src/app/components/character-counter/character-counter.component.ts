import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-counter',
  templateUrl: './character-counter.component.html',
  styleUrls: ['./character-counter.component.scss']
})
export class CharacterCounterComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }

  text: string = '';
  charCount: number = 0;
  letterCount: number = 0;
  numberCount: number = 0;
  spaceCount: number = 0;
  symbolCount: number = 0;
  wordCount: number = 0;
  sentenceCount: number = 0;
  paragraphCount: number = 0;
  wordFrequency: { [key: string]: number } = {};

  updateCounter() {
    this.text = this.text.trim(); // Trim the text to remove leading/trailing whitespace
    const words = this.text ? this.text.split(/\s+/) : []; // Split only if text is not empty
    
    this.charCount = this.text.length;
    this.letterCount = this.text.replace(/[^a-zA-Z]/g, '').length;
    this.numberCount = this.text.replace(/\D/g, '').length;
    this.spaceCount = this.text.split(' ').length - 1;
    this.symbolCount = this.charCount - this.letterCount - this.numberCount - this.spaceCount;
    this.wordCount = words.length;
    this.sentenceCount = this.text ? this.text.split(/[.!?]+/).filter(Boolean).length : 0;
    this.paragraphCount = this.text ? this.text.split(/\n\s*\n/).filter(Boolean).length : 0;
  
    this.wordFrequency = {};
    if (this.text) {
      for (const word of words) {
        if (word) { // Only count non-empty words
          this.wordFrequency[word] = (this.wordFrequency[word] ?? 0) + 1;
        }
      }
    }
  }

  get sortedWordDensity(): [string, number][] {
    return Object.entries(this.wordFrequency).sort((a, b) => b[1] - a[1]);
  }

  clearText() {
    this.text = '';
    this.charCount = 0;
    this.letterCount = 0;
    this.numberCount = 0;
    this.spaceCount = 0;
    this.symbolCount = 0;
    this.wordCount = 0;
    this.sentenceCount = 0;
    this.paragraphCount = 0;
    this.wordFrequency = {};
  }

  copyText() {
    navigator.clipboard.writeText(this.text).then(() => {
      // Optionally, you can show a toast or alert to indicate successful copy
      console.log('Text copied to clipboard');
    });
  }
}
