import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  productGroupForm = new FormGroup({
    code: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    quantityInStock: new FormControl(''),
    vendor: new FormControl(''),
    createdate: new FormControl(''),
    ename: new FormControl(''),
    description: new FormControl(''),
    enabled: new FormControl(''),
    imgUrl: new FormControl('')
  });

  success: boolean = false

  constructor(private productService: ProductService) {
  }

  _productModel: any

  addProduct() {
    this.productService.addNewProduct(this.productGroupForm.value).subscribe({
      next: () => {
        this.productGroupForm.reset()
        this.success = true
        setInterval(() => {
          this.success = false
        }, 1000)
      },
      error: err => console.log(err)
    })
    console.log(this.productGroupForm.value)
  }
}

