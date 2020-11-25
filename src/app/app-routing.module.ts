import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemDetailsComponent} from './item-details/item-details.component'
const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'itemDetail',
    component : ItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
