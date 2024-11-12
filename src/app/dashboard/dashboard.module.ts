import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { GraphComponent } from './components/graph/graph.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    GraphComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
