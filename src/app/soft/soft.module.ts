import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SoftComponent} from './soft.component';

export const skillsRoute: Routes = [
  {
    path: '',
    component: SoftComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(skillsRoute)
  ]
})
export class SoftModule { }
