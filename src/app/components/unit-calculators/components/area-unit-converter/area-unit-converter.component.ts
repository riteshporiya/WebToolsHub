import { Component } from '@angular/core';

@Component({
  selector: 'app-area-unit-converter',
  templateUrl: './area-unit-converter.component.html',
  styleUrls: ['./area-unit-converter.component.scss']
})
export class AreaUnitConverterComponent {
  units = [
    { unitType: "Square kilometer", shortCode: "km²", conversionFactor: 1e6 },
    { unitType: "Square meter", shortCode: "m²", conversionFactor: 1 },
    { unitType: "Square mile", shortCode: "mi²", conversionFactor: 2589988.12 },
    { unitType: "Square yard", shortCode: "yd²", conversionFactor: 0.83612736 },
    { unitType: "Square foot", shortCode: "ft²", conversionFactor: 0.09290304 },
    { unitType: "Square inch", shortCode: "in²", conversionFactor: 0.00064516 },
    { unitType: "Hectare", shortCode: "ha", conversionFactor: 10000 },
    { unitType: "Acre", shortCode: "ac", conversionFactor: 4046.8564224 },
  ];

  fromValue: number = 1;
  toValue: number = 0;
  fromUnit: string = "m²";
  toUnit: string = "km²";

  convert() {
    const fromFactor = this.units.find(u => u.shortCode === this.fromUnit)?.conversionFactor || 1;
    const toFactor = this.units.find(u => u.shortCode === this.toUnit)?.conversionFactor || 1;
    this.toValue = (this.fromValue * fromFactor) / toFactor;
  }

  switchUnits() {
    [this.fromUnit, this.toUnit] = [this.toUnit, this.fromUnit];
    this.convert();
  }

  getConversionFactor(unit: string) {
    return this.units.find(u => u.shortCode === unit)?.conversionFactor || 1;
  }
}