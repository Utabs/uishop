import { Injectable } from '@angular/core';
import {ApiRequestsService} from "../../service/api-requests.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private apiService:ApiRequestsService) { }

  getProductById(id:number):Observable<any>{
    return  this.apiService.get("/api/product/"+id)
  }

  getProductByCode(code:number):Observable<any>{
    return  this.apiService.get("/api/product/code/"+code)
  }

  getProductList():Observable<any>{
    return  this.apiService.get("/api/product")
  }

  addNewProduct(product:Object):Observable<any>{
    return  this.apiService.post("/api/product",product)
  }

  removeProduct(id:number){
    return this.apiService.delete("/api/product/"+id)
  }

  updateProduct(id:number,product:Object):Observable<any>{
    return this.apiService.put("/api/product/"+id,product)
  }




}
