import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {FormationComponent} from './formation/formation.component';
import {SoftComponent} from './soft/soft.component';
import {ExpComponent} from './exp/exp.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'infos', component: ContactComponent},
  {path: 'formations', component: FormationComponent},
  {path: 'softskills', component: SoftComponent},
  {path: 'exp', component: ExpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
