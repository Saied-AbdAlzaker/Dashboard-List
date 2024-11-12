import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { GraphComponent } from './components/graph/graph.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, title: 'Dashboard', children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home'},
      { path: 'graph', component: GraphComponent, title: 'Graph' },
      { path: 'list', component: ListComponent, title: 'List' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
