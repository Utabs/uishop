import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PurchaseComponent} from './purchase.component';
import {ListPurchaseComponent} from './list-purchase/list-purchase.component';
import {PurchaseRoutingModule} from "./purchase-routing.module";
import {CreatePurchaseComponent} from './create-purchase/create-purchase.component';
import {CustomerModule} from "../customer/customer.module";
import {PersonModule} from "../person/person.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsModule} from "../products/products.module";


@NgModule({
  declarations: [
    PurchaseComponent,
    ListPurchaseComponent,
    CreatePurchaseComponent
  ],
    imports: [
        CommonModule,
        PurchaseRoutingModule,
        CustomerModule,
        PersonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductsModule
    ]
})
export class PurchaseModule {
}
