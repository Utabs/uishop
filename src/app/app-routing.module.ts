import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BranchComponent} from "./modules/branch/branch.component";

const routes: Routes = [
  // { path: 'branch',component: BranchComponent}
  { path: 'branch',   loadChildren: () => import('./modules/branch/branch.module').then(m=>m.BranchModule)},
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { path: 'basket', loadChildren: () => import('./modules/purchase/purchase.module').then(m => m.PurchaseModule) },
  { path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
