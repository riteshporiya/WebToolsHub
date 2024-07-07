import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCounterComponent } from './components/character-counter/character-counter.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';
import { TextToAsciiComponent } from './components/text-to-ascii/text-to-ascii.component';

const routes: Routes = [
  { path: '', component: ToolsListComponent, data: { title: 'Tools: Popular Free Online Web Tools' } },
  { path: 'character-counter', component: CharacterCounterComponent, data: { title: 'Character Counter Tool | Text Character Count' } },
  { path: 'password-generator', component: PasswordGeneratorComponent, data: { title: 'Random Strong Password Generator Tool' } },
  { path: 'text-to-ascii', component: TextToAsciiComponent, data: { title: 'Text To ASCII Converter Tool' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
