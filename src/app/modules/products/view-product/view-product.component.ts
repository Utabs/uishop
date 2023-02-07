import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{

  @Input() _productModel:any
  productGroupForm=new FormGroup({
      code: new FormControl( ''),
      name: new FormControl('2'),
      price: new FormControl('3'),
      quantityInStock: new FormControl('4'),
      vendor: new FormControl(''),
      createdate: new FormControl(''),
      ename: new FormControl(''),
      description: new FormControl(''),
      enabled: new FormControl(''),
      imgUrl: new FormControl('')
    });

  constructor() {
  }

  ngOnInit(): void {

  }
}
