import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {CreateProductComponent} from "./create-product/create-product.component";
import {ViewProductComponent} from "./view-product/view-product.component";
import {ViewProductListComponent} from "./view-product-list/view-product-list.component";

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: CreateProductComponent },
  { path: 'view', component: ViewProductComponent },
  { path: 'saleProductList', component: ViewProductListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
