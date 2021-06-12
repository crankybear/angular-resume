import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact.component';


export const contactRoute: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoute)
  ]
})
export class ContactModule { }
