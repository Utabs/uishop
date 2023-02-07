import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "../products/products.component";
import {CreateProductComponent} from "../products/create-product/create-product.component";
import {PurchaseComponent} from "./purchase.component";
import {CreatePurchaseComponent} from "./create-purchase/create-purchase.component";
import {ListPurchaseComponent} from "./list-purchase/list-purchase.component";


const routes: Routes = [{
  path: '', children: [
    {path: '', component: PurchaseComponent},
    {path: 'addbasket', component: CreatePurchaseComponent},
    {path: 'purchase', component: ListPurchaseComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule {
}
