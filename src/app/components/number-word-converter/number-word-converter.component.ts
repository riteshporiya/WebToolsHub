import { Component, OnInit } from '@angular/core';
import { ToWords } from 'to-words';

interface LocaleOption {
  code: string;
  name: string;
}

@Component({
  selector: 'app-number-word-converter',
  templateUrl: './number-word-converter.component.html',
  styleUrls: ['./number-word-converter.component.scss']
})
export class NumberWordConverterComponent implements OnInit {
  inputValue: string = '';
  outputValue: string = '';
  currencyType: string = 'indian-rupees';
  letterCase: string = 'lowercase';
  isCopied: boolean = false;
  selectedLocale: string = 'en-IN';

  localeOptions: LocaleOption[] = [
    { code: 'en-AE', name: 'UAE (English)' },
    { code: 'en-BD', name: 'Bangladesh (English)' },
    { code: 'en-GB', name: 'UK (English)' },
    { code: 'en-GH', name: 'Ghana (English)' },
    { code: 'en-IE', name: 'Ireland (English)' },
    { code: 'en-IN', name: 'India (English)' },
    { code: 'en-MM', name: 'Myanmar (English)' },
    { code: 'en-MU', name: 'Mauritius (English)' },
    { code: 'en-NG', name: 'Nigeria (English)' },
    { code: 'en-NP', name: 'Nepal (English)' },
    { code: 'en-US', name: 'USA (English)' },
    { code: 'en-PH', name: 'Philippines (English)' },
    { code: 'ee-EE', name: 'Estonia (Estonian)' },
    { code: 'fa-IR', name: 'Iran (Persian)' },
    { code: 'fr-BE', name: 'Belgium (French)' },
    { code: 'fr-FR', name: 'France (French)' },
    { code: 'gu-IN', name: 'India (Gujarati)' },
    { code: 'hi-IN', name: 'India (Hindi)' },
    { code: 'mr-IN', name: 'India (Marathi)' },
    { code: 'nl-SR', name: 'Suriname (Dutch)' },
    { code: 'pt-BR', name: 'Brazil (Portuguese)' },
    { code: 'tr-TR', name: 'Turkey (Turkish)' },
    { code: 'ko-KR', name: 'Korea (Hangul)' }
  ];

  private toWords: any;

  ngOnInit() {
    this.initializeToWords();
  }

  initializeToWords() {
    this.toWords = new ToWords({
      localeCode: this.selectedLocale,
      converterOptions: {
        currency: true,
        ignoreDecimal: false,
        ignoreZeroCurrency: false,
        doNotAddOnly: false,
      }
    });
  }

  convert() {
    if (!this.inputValue) {
      this.outputValue = '';
      return;
    }

    const number = parseFloat(this.inputValue);
    if (isNaN(number)) {
      this.outputValue = 'Invalid number';
      return;
    }

    try {
      const result = this.toWords.convert(number, { currency: true });
      this.outputValue = this.applyLetterCase(result);
    } catch (error) {
      console.error('Conversion error:', error);
      this.outputValue = 'Error in conversion';
    }
  }

  private applyLetterCase(text: string): string {
    switch (this.letterCase) {
      case 'lowercase': return text.toLowerCase();
      case 'UPPERCASE': return text.toUpperCase();
      case 'Sentence-case': return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      case 'Title-Case': return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      default: return text;
    }
  }

  onLocaleChange() {
    this.initializeToWords();
    this.convert();
  }

  clearInput() {
    this.inputValue = '';
    this.outputValue = '';
  }

  copyOutput() {
    navigator.clipboard.writeText(this.outputValue);
    this.isCopied = true;
    setTimeout(() => this.isCopied = false, 2000);
  }
}