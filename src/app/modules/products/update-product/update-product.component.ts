import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  @Input() _productModel: any;
  @Output() productList_u_ref: EventEmitter<any> = new EventEmitter<any>()
  success: boolean = false

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


  constructor(private productService: ProductService) {
  }

  updateProduct() {
    console.log(this.productGroupForm.value)
    this.productService.updateProduct(this._productModel.id, this._productModel).subscribe({
      next: () => {
        this.productService.getProductList().subscribe({
          next: (data) => this.productList_u_ref.emit(data),
          error: err => console.log("updateProduct1"+err)
        })
        this.productGroupForm.reset()
      },
      error:err => console.log("updateProduct2"+err)
    })
  }
}
