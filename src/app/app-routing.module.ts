import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { GraphViewComponent } from './graph-view/graph-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/graph', pathMatch: 'full'},
  { path: 'graph', component: GraphViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
