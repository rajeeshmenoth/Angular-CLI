import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [{ path: 'path', component: CustomerComponent }];

@NgModule({
  exports: [RouterModule] ,
  imports: [
    CommonModule, [RouterModule.forRoot(routes)]
  ],
  declarations: []
})
export class AppRoutingModule { }
