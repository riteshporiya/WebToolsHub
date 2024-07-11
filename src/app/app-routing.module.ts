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

const routes: Routes = [
  { path: '', component: ToolsListComponent, data: { title: 'Tools: Popular Free Online Web Tools' } },
  { path: 'character-counter', component: CharacterCounterComponent, data: { title: 'Character Counter Tool | Text Character Count' } },
  { path: 'password-generator', component: PasswordGeneratorComponent, data: { title: 'Random Strong Password Generator Tool' } },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
