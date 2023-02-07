import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PurchaseService} from "../purchase.service";
import {PersonService} from "../../person/person.service";

@Component({
  selector: 'app-list-purchase',
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.css']
})
export class ListPurchaseComponent implements OnInit{
  @Output() afterCheckout: EventEmitter<any> = new EventEmitter<any>();

  productList!: any[];
  products: any[] = [];
  subTotal!: any;
  constructor(private purchaseService:PurchaseService,private personService:PersonService) {
  }

  ngOnInit(): void {
    this.purchaseService.loadCart();
    this.products = this.purchaseService.getProduct();
  }

  removeFromCart(product:any){
    this.purchaseService.removeCartProduct(product);
    this.products=this.purchaseService.getProduct();
  }

  getTotalPrice(){
    return this.products?.reduce((sum,product)=>({
      quntity:1,
       price1:sum.price1 + product.quantity* product.price1,
  }),{quantity:1,price1:0}).price1
  }

  onCheckout(){

    this.personService.clearPerson()
    console.log(this.products)
    this.afterCheckout.emit(true)
  }


}
