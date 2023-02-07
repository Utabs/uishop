import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BranchModule} from "./modules/branch/branch.module";
import {BranchService} from "./modules/branch/branch.service";
import {AppConfig} from "./AppConfig";
import { PersonComponent } from './modules/person/person.component';
import { OrderComponent } from './modules/order/order.component';
import { OrderItemsComponent } from './modules/order/order-items/order-items.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    OrderComponent,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [BranchService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
