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
    CaseConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
