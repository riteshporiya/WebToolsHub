import { Component } from '@angular/core';
import { unitOptionDataArray } from '../unit-calculators/unit-data';

@Component({
  selector: 'app-speed-converter',
  templateUrl: './speed-converter.component.html',
  styleUrls: ['./speed-converter.component.scss']
})
export class SpeedConverterComponent {
  unitOptions = unitOptionDataArray['speed-unit-converter'].unitOption;
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
