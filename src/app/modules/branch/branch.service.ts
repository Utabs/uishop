import { Injectable } from '@angular/core';
import {ApiRequestsService} from "../../service/api-requests.service";
import {Observable, Observer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private apiService:ApiRequestsService) { }

  getBranchById(id:number):Observable<any>{
    return  this.apiService.get("/api/branch/"+id)
  }

  getBranchByCode(code:number):Observable<any>{
    return  this.apiService.get("/api/branch/code/"+code)
  }

  getBranchList():Observable<any>{
    return  this.apiService.get("/api/branch")
  }

  addNewBranch(branch:Object):Observable<any>{
    return  this.apiService.post("/api/branch",branch)
  }

  removeBranch(id:number){
    return this.apiService.delete("/api/branch/"+id)
  }

  updateBranch(id:number,branch:Object):Observable<any>{
    return this.apiService.put("/api/branch/"+id,branch)
  }

}
