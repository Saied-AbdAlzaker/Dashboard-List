import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
      { path: '', loadChildren: () => import('./module/graph/graph.module').then(m => m.GraphModule) },
      { path: '', loadChildren: () => import('./module/list/list.module').then(m => m.ListModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
