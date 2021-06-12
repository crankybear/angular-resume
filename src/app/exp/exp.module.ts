import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ExpComponent} from './exp.component';

export const xpRoute: Routes = [
  {
    path: '',
    component: ExpComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(xpRoute)
  ]
})
export class ExpModule { }
