import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PersonService} from "../../person/person.service";
import {ProductService} from "../product.service";
import {PurchaseService} from "../../purchase/purchase.service";

@Component({
  selector: 'app-view-product-list',
  templateUrl: './view-product-list.component.html',
  styleUrls: ['./view-product-list.component.css']
})
export class ViewProductListComponent implements OnInit {
  // @Input() personBaskets: any;
  productList: any[] = [];
  searchText: any
  products: any[] = [];

  constructor(private router: Router, private productService: ProductService, private purchaseService: PurchaseService) {
  }

  ngOnInit(){
    this.productService.getProductList().subscribe(
      {
        next: data => {
          this.productList = data
          console.log(this.productList)
        },
        error: error => {
          console.log("error product" + error)
        },
        complete: () => {
          console.log("ViewProductListComponent ngOnInit ..")
        }
      })
  }

  addToCart(product: any) {
    console.log(product)
    if (!this.purchaseService.productInCart(product)) {
      product.quantity = 1;
      this.purchaseService.addToCart(product);
      this.products = [...this.purchaseService.getProduct()];
    }
  }

}
