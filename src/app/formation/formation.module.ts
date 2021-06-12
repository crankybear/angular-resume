import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormationComponent} from './formation.component';

export const formationRoute: Routes = [
  {
    path: '',
    component: FormationComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(formationRoute)
  ]
})
export class FormationModule { }
