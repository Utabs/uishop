import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  customerGroupForm = new FormGroup({
    mobile: new FormControl(''),
    name: new FormControl(''),
    family: new FormControl(''),
    address: new FormControl('')
  });
  customerList: any = []
  success = false;
}
