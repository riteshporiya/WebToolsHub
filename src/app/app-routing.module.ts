import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCounterComponent } from './components/character-counter/character-counter.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';
import { TextToAsciiComponent } from './components/text-to-ascii/text-to-ascii.component';
import { TextRepeaterComponent } from './components/text-repeater/text-repeater.component';
import { StringGeneratorComponent } from './components/string-generator/string-generator.component';
import { IpGeneratorComponent } from './components/ip-generator/ip-generator.component';
import { HashGeneratorComponent } from './components/hash-generator/hash-generator.component';
import { UuidGeneratorComponent } from './components/uuid-generator/uuid-generator.component';
import { NumberWordConverterComponent } from './components/number-word-converter/number-word-converter.component';
import { MoneyCalculatorComponent } from './components/money-calculator/money-calculator.component';
import { IpSubnetCalculatorComponent } from './components/ip-subnet-calculator/ip-subnet-calculator.component';
import { CssFormatterComponent } from './components/css-formatter/css-formatter.component';
import { HtmlFormatterComponent } from './components/html-formatter/html-formatter.component';
import { CaseConverterComponent } from './components/case-converter/case-converter.component';
import { JsonParserComponent } from './components/json-parser/json-parser.component';
import { BarcodeGeneratorComponent } from './components/barcode-generator/barcode-generator.component';
import { QrCodeGeneratorComponent } from './components/qr-code-generator/qr-code-generator.component';
import { UnitCalculatorsComponent } from './components/unit-calculators/unit-calculators.component';
import { AreaUnitConverterComponent } from './components/unit-calculators/components/area-unit-converter/area-unit-converter.component';
import { DataTransferRateComponent } from './components/unit-calculators/components/data-transfer-rate/data-transfer-rate.component';
import { DigitalStorageComponent } from './components/unit-calculators/components/digital-storage/digital-storage.component';
import { EnergyConverterComponent } from './components/unit-calculators/components/energy-converter/energy-converter.component';
import { FrequencyConverterComponent } from './components/unit-calculators/components/frequency-converter/frequency-converter.component';
import { FuelEconomyConverterComponent } from './components/unit-calculators/components/fuel-economy-converter/fuel-economy-converter.component';
import { LengthConverterComponent } from './components/unit-calculators/components/length-converter/length-converter.component';
import { MassConverterComponent } from './components/unit-calculators/components/mass-converter/mass-converter.component';
import { PlaneAngleConverterComponent } from './components/unit-calculators/components/plane-angle-converter/plane-angle-converter.component';
import { PressureConverterComponent } from './components/unit-calculators/components/pressure-converter/pressure-converter.component';
import { SpeedConverterComponent } from './components/unit-calculators/components/speed-converter/speed-converter.component';
import { TemperatureConverterComponent } from './components/unit-calculators/components/temperature-converter/temperature-converter.component';
import { TimeConverterComponent } from './components/unit-calculators/components/time-converter/time-converter.component';
import { VolumeConverterComponent } from './components/unit-calculators/components/volume-converter/volume-converter.component';
import { AgeCalculatorComponent } from './components/age-calculator/age-calculator.component';

const unitCalculatorRoutes: Routes = [
  { path: '', redirectTo: 'area-unit-converter', pathMatch: 'full' },
  { path: 'area-unit-converter', component: AreaUnitConverterComponent, data: { title: 'Land Area Converter: Calculator for Area Unit Conversion' } },
  { path: 'data-transfer-rate', component: DataTransferRateComponent, data: { title: 'Data Transfer Rate Conterver: Calculate Data Transfer Speed' } },
  { path: 'digital-storage', component: DigitalStorageComponent, data: { title: 'Data Storage Converter: Convert Digital Storage to Unit' } },
  { path: 'energy-converter', component: EnergyConverterComponent, data: { title: 'Energy Unit Converter: Free Energy Unit Conversion Calculator' } },
  { path: 'frequency-converter', component: FrequencyConverterComponent, data: { title: 'Online Frequency Converter: Hz to kHz to GHz Free Conversion' } },
  { path: 'fuel-economy-converter', component: FuelEconomyConverterComponent, data: { title: 'Fuel Economy Converter: liter per Kilometer Conversion Calculator' } },
  { path: 'length-converter', component: LengthConverterComponent, data: { title: 'Distance and Length Converter: Calculator for K/m, Meters, Miles, And More' } },
  { path: 'mass-converter', component: MassConverterComponent, data: { title: 'Weight &amp; Mass Converter from Kg to Pounds to Ounce to Gram' } },
  { path: 'plane-angle-converter', component: PlaneAngleConverterComponent, data: { title: 'Plane Angle Unit Converter: Online Calculate Degree, Radian, Grade' } },
  { path: 'pressure-converter', component: PressureConverterComponent, data: { title: 'Pressure Converter: Free Online Pressure Unit Calculator' } },
  { path: 'speed-converter', component: SpeedConverterComponent, data: { title: 'Speed Calculator: Online Speed &amp; Velocity Unit Free Calculator' } },
  { path: 'temperature-converter', component: TemperatureConverterComponent, data: { title: 'Online Temperature Converter: Fahrenheit(°F), Celsius(°C)' } },
  { path: 'time-converter', component: TimeConverterComponent, data: { title: 'Time Zone Converter: Convert One Time Zone to Another Time Zone' } },
  { path: 'volume-converter', component: VolumeConverterComponent, data: { title: 'Volume Converter: Free Online Volume Conversion Calculator' } },
];

const routes: Routes = [
  { path: '', component: ToolsListComponent, data: { title: 'Tools: Popular Free Online Web Tools' } },
  { path: 'character-counter', component: CharacterCounterComponent, data: { title: 'Character Counter Tool | Text Character Count' } },
  { path: 'password-generator', component: PasswordGeneratorComponent, data: { title: 'Random Strong Password Generator Tool' } },
  { path: 'barcode-generator', component: BarcodeGeneratorComponent, data: { title: 'Barcode Generator Tool' } },
  { path: 'qr-code-generator', component: QrCodeGeneratorComponent, data: { title: 'QR Code Generator Tool - Create Free QR code' } },
  { path: 'unit-converter', component: UnitCalculatorsComponent, children: unitCalculatorRoutes,  data: { title: 'Land Area Converter: Calculator for Area Unit Conversion' } },
  { path: 'text-to-ascii', component: TextToAsciiComponent, data: { title: 'Text To ASCII Converter Tool' } },
  { path: 'text-repeater', component: TextRepeaterComponent, data: { title: 'Text Repeater: Text Generator For Messaging' } },
  { path: 'random-string', component: StringGeneratorComponent, data: { title: 'Random String Generator Tool' } },
  { path: 'random-ip', component: IpGeneratorComponent, data: { title: 'Random IP Generator Tool' } },
  // { path: 'hash-generator', component: HashGeneratorComponent, data: { title: 'Hash Generator - MD5, SHA-256, SHA512 Hash Calculator' } },
  { path: 'uuid-generator', component: UuidGeneratorComponent, data: { title: 'Free UUID Generator: Sort Universally Unique Identifiew' } },
  { path: 'numbers-to-words', component: NumberWordConverterComponent, data: { title: 'Numbers To Words Converter Currency Wise' } },
  { path: 'money-counter-calculator', component: MoneyCalculatorComponent, data: { title: 'Money Counter Calculator - Cash Counting' } },
  { path: 'ip-subnet-calculator', component: IpSubnetCalculatorComponent, data: { title: 'IP Subnet Calculator for IPv4 | CIDR Calculator' } },
  { path: 'css-formatter', component: CssFormatterComponent, data: { title: 'CSS Formatter | CSS Code Beautifier' } },
  { path: 'html-formatter', component: HtmlFormatterComponent, data: { title: 'HTML Formatter | HTML Code Beautifier' } },
  { path: 'case-converter', component: CaseConverterComponent, data: { title: 'Case Converter | Convert Uppercase to Lowercase' } },
  { path: 'json-parser', component: JsonParserComponent, data: { title: 'JSON Parser' } },
  { path: 'age-calculator', component: AgeCalculatorComponent, data: { title: 'Age Calculator | Calculate Age in year, Month and day' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
