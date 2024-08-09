import { Component } from '@angular/core';
import { unitOptionDataArray } from '../../unit-data';

@Component({
  selector: 'app-data-transfer-rate',
  templateUrl: './data-transfer-rate.component.html',
  styleUrls: ['./data-transfer-rate.component.scss']
})
export class DataTransferRateComponent {
  unitOptions = unitOptionDataArray['data-transfer-rate-unit-converter'].unitOption;
  inputValue = 1;
  outputValue = 0;
  fromUnit = this.unitOptions[0];
  toUnit = this.unitOptions[1];

  convert() {
    let baseValue: number;

    if (typeof this.fromUnit.conversionFactor === 'number') {
      baseValue = this.inputValue * this.fromUnit.conversionFactor;
    } else {
      baseValue = this.fromUnit.conversionFactor.toBase(this.inputValue);
    }

    if (typeof this.toUnit.conversionFactor === 'number') {
      this.outputValue = baseValue / this.toUnit.conversionFactor;
    } else {
      this.outputValue = this.toUnit.conversionFactor.fromBase(baseValue);
    }
  }

  swapUnits() {
    [this.fromUnit, this.toUnit] = [this.toUnit, this.fromUnit];
    this.convert();
  }
}