import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductListComponent } from './view-product-list/view-product-list.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
    declarations: [
        ProductsComponent,
        ListProductComponent,
        ViewProductComponent,
        CreateProductComponent,
        DeleteProductComponent,
        UpdateProductComponent,
        ViewProductListComponent
    ],
    exports: [
        ViewProductListComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2SearchPipeModule
    ]
})
export class ProductsModule { }
