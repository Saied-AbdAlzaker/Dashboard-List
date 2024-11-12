import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    MatProgressBarModule
  ], exports: [
    SidebarComponent,
    NavbarComponent,
    CalendarModule,
    MatProgressBarModule
  ],
  providers: [],
})
export class SharedModule { }
