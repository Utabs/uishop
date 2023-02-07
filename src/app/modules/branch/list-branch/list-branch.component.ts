import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BranchService} from "../branch.service";

@Component({
  selector: 'app-list-branch',
  templateUrl: './list-branch.component.html',
  styleUrls: ['./list-branch.component.css']
})
export class ListBranchComponent implements OnInit, OnDestroy{
  branchlist:any=[]
  branchData:any=""
  constructor(private router: Router, private branchService: BranchService) {
  }
  ngOnInit(): void {
    this.branchService.getBranchList().subscribe(data=>this.branchlist=data)
  }

  //toDo: check is it ok or search by id
  getBranchByCode(code:number){
    this.branchService.getBranchByCode(code).subscribe(data=>{
      this.branchData=data
      console.log(this.branchData)
    })
  }


  removeBranch(id: number) {
    console.log(id)
    this.branchService.removeBranch(id)    .subscribe({
      next: data => {
        console.log(data+'Delete successful')
      },
      error: error => {
         console.error('There was an error!', error);
      }
    });
  }

  updateNotified(branchList:any[]){
    this.branchlist=branchList
    console.log("update"+branchList)
  }
  ngOnDestroy(): void {
  }
}
