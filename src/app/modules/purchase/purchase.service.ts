import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor() {
    console.log("PurchaseService constructor called...")
  }



  //----------shopping cart service ----------------------------
  productList:any[]=[];
  products:any[]=[];

  getAllProducts(){
    return this.productList;
  }

  getProduct(){
    return this.products
  }

  saveCart(){
    localStorage.setItem('cart_item',JSON.stringify(this.products))
  }

  addToCart(addedProduct:any){
    this.products.push(addedProduct);
    this.saveCart();
  }
  //toDo: change key name by random id ???
  loadCart(){
    this.products=JSON.parse(localStorage.getItem('cart_item')as any||[])
  }

  productInCart(product:any){
    return this.products.findIndex((x:any)=>x.id==product.id)> -1;
  }

  removeCartProduct(product:any){
    const index=this.products.findIndex((x:any)=>x.id==product.id)
    if (index>-1){
      this.products.splice(index,1);
      this.saveCart()
    }
  }

  clearProducts(){
    localStorage.clear();
  }

}
