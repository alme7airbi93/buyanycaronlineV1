import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarDetailsComponent } from './cardetails/cardetails.component';

const routes: Routes = [
  { path: '', component: CarDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
