import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'infos', loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule)},
  {path: 'formations', loadChildren: () => import('./formation/formation.module').then(m => m.FormationModule)},
  {path: 'softskills', loadChildren: () => import('./soft/soft.module').then(m => m.SoftModule)},
  {path: 'exp', loadChildren: () => import('./exp/exp.module').then(module => module.ExpModule)},
  {path: 'mailme', loadChildren: () => import('./keepintouch/keepintouch.module').then(module => module.KeepintouchModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
