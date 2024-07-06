import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCounterComponent } from './components/character-counter/character-counter.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';

const routes: Routes = [
  { path: '', component: ToolsListComponent, data: { title: 'Tools: Popular Free Online Web Tools' } },
  { path: 'character-counter', component: CharacterCounterComponent, data: { title: 'Online Character Counter Tool | Text Character Count' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
