import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonComponent} from "./person.component";
import {ListPersonComponent} from "./list-person/list-person.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: PersonComponent},
      {path: 'persons', component: ListPersonComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
