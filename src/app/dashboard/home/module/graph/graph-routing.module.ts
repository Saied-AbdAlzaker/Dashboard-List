import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  { path: '', redirectTo: 'graph', pathMatch: 'full' },
  {
    path: 'graph', component: GraphComponent, title: 'Graph'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphRoutingModule { }
