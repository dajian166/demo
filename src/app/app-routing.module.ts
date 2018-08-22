import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab0Component } from './tab0/tab0.component';

const routes: Routes = [
  { path: '',   redirectTo: '/tab0', pathMatch: 'full' },
  { path: 'tab0', component: Tab0Component },
  { path: 'tab1', component: Tab1Component },
  { path: 'tab2', component: Tab2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
