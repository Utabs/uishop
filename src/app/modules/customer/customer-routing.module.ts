import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {ListBranchComponent} from "../branch/list-branch/list-branch.component";
import {BranchComponent} from "../branch/branch.component";
import {CustomerComponent} from "./customer.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: CustomerComponent},
      {path: 'add', component: CreateCustomerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
