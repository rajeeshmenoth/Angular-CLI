import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [{ path: '', component: EmployeeComponent },
{ path: 'customer', component: CustomerComponent },
{ path: '**', component: PageNotFoundComponent }];


@NgModule({
  exports: [RouterModule] ,
  imports: [
    CommonModule, [RouterModule.forRoot(routes)]
  ],
  declarations: []
})
export class AppRoutingModule { }
