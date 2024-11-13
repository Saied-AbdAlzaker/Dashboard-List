import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GraphComponent } from './module/graph/graph/graph.component';
import { ListComponent } from './module/list/list/list.component';



@NgModule({
  declarations: [
    // HomeComponent,
    GraphComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class HomeModule { }
