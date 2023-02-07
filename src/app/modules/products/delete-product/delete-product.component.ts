import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductService} from "../product.service";



@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  @Input() _productModel: any
  @Output() productList_u_ref:EventEmitter<any>=new EventEmitter<any>()

  constructor(private productService: ProductService) {
  }

  deleteProduct(id: number) {
    this.productService.removeProduct(id).subscribe({
      next: data=>{
        console.log(data)
        this.productService.getProductList().subscribe({
          next:data=>this.productList_u_ref.emit(data)
        })   }
      ,
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }
reLoad(){
    this.productService.getProductList().subscribe({
      next:data=>this.productList_u_ref.emit(data)
    })
}
}
