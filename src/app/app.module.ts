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

@NgModule({
  declarations: [
    AppComponent,
    CharacterCounterComponent,
    ToolsListComponent,
    BreadcrumbComponent,
    PasswordGeneratorComponent,
    TextToAsciiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
