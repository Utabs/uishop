import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        CustomerComponent,
        CreateCustomerComponent
    ],
    exports: [
        CreateCustomerComponent
    ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        ReactiveFormsModule
    ]
})
export class CustomerModule { }
