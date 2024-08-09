import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCounterComponent } from './components/character-counter/character-counter.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
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
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { HtmlFormatterComponent } from './components/html-formatter/html-formatter.component';
import { CaseConverterComponent } from './components/case-converter/case-converter.component';
import { JsonParserComponent } from './components/json-parser/json-parser.component';
import { BarcodeGeneratorComponent } from './components/barcode-generator/barcode-generator.component';
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';
import { QrCodeGeneratorComponent } from './components/qr-code-generator/qr-code-generator.component';
import { QRCodeModule } from 'angularx-qrcode';
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

@NgModule({
  declarations: [
    AppComponent,
    CharacterCounterComponent,
    ToolsListComponent,
    BreadcrumbComponent,
    PasswordGeneratorComponent,
    TextToAsciiComponent,
    TextRepeaterComponent,
    StringGeneratorComponent,
    IpGeneratorComponent,
    HashGeneratorComponent,
    UuidGeneratorComponent,
    NumberWordConverterComponent,
    MoneyCalculatorComponent,
    IpSubnetCalculatorComponent,
    CssFormatterComponent,
    HtmlFormatterComponent,
    CaseConverterComponent,
    JsonParserComponent,
    BarcodeGeneratorComponent,
    QrCodeGeneratorComponent,
    UnitCalculatorsComponent,
    AreaUnitConverterComponent,
    DataTransferRateComponent,
    DigitalStorageComponent,
    EnergyConverterComponent,
    FrequencyConverterComponent,
    FuelEconomyConverterComponent,
    LengthConverterComponent,
    MassConverterComponent,
    PlaneAngleConverterComponent,
    PressureConverterComponent,
    SpeedConverterComponent,
    TemperatureConverterComponent,
    TimeConverterComponent,
    VolumeConverterComponent,
    AgeCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule,
    MonacoEditorModule.forRoot(),
    BarcodeGeneratorAllModule,
    QRCodeModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
