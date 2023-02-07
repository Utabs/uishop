import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BranchService} from "../../branch/branch.service";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productList: any[] = []
  productData: any = ""

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      {
        next: data =>{ this.productList = data
        console.log(this.productList)

        },
        error: error => console.log("error product" + error)
      })
  }

  getProduct(id:number){
     this.productService.getProductById(id).subscribe({
      next:(data)=>this.productData=data ,
      error:err => console.log("getProduct"+err)
    })
  }



  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  productNotify(productList: any) {
    this.productList=productList
  }


}
