import { Component, OnInit } from '@angular/core';
import { CurrencyData } from './currency-data';

@Component({
  selector: 'app-money-calculator',
  templateUrl: './money-calculator.component.html',
  styleUrls: ['./money-calculator.component.scss']
})
export class MoneyCalculatorComponent implements OnInit {
  currencies = CurrencyData;
  selectedCurrency = this.currencies[0];
  totalAmount = 0;
  countOfNotes = 0;
  countOfCoins = 0;
  noteCoinArray: { notes: (number | null)[]; coins: (number | null)[]; } = {
    notes: new Array(this.selectedCurrency.currencyNotes.length),
    coins: new Array(this.selectedCurrency.currencyCoins.length)
  };

  ngOnInit(): void {
    this.resetCalculator();
  }

  onCurrencyChange(event: Event): void {
    const currencyCode = (event.target as HTMLSelectElement).value;
    const selected = this.currencies.find(currency => currency.currencyCode === currencyCode);
    if (selected) {
      this.selectedCurrency = selected;
      this.resetCalculator();
    }
  }

  resetCalculator(): void {
    this.noteCoinArray = {
      notes: new Array(this.selectedCurrency.currencyNotes.length).fill(null),
      coins: new Array(this.selectedCurrency.currencyCoins.length).fill(null)
    };
    this.totalAmount = 0;
    this.countOfNotes = 0;
    this.countOfCoins = 0;
  }

  calculateCurrency(): void {
    let totalCalcOfNotes = 0;
    let totalCalcOfCoins = 0;
    this.countOfNotes = 0;
    this.countOfCoins = 0;

    for (let i = 0; i < this.noteCoinArray.notes.length; i++) {
      if (this.noteCoinArray.notes[i]) {
        totalCalcOfNotes += this.noteCoinArray.notes[i]! * this.selectedCurrency.currencyNotes[i];
        this.countOfNotes += this.noteCoinArray.notes[i]!;
      }
    }

    for (let i = 0; i < this.noteCoinArray.coins.length; i++) {
      if (this.noteCoinArray.coins[i]) {
        totalCalcOfCoins += this.noteCoinArray.coins[i]! * this.selectedCurrency.currencyCoins[i];
        this.countOfCoins += this.noteCoinArray.coins[i]!;
      }
    }

    this.totalAmount = totalCalcOfNotes + totalCalcOfCoins;
  }
}