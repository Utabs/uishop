import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { CreatePersonComponent } from './create-person/create-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListPersonComponent } from './list-person/list-person.component';


@NgModule({
  declarations: [
    CreatePersonComponent,
    ViewPersonComponent,
    ListPersonComponent
  ],
  exports: [
    CreatePersonComponent,
    ViewPersonComponent,
    ListPersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    ReactiveFormsModule
  ]
})
export class PersonModule { }
