import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-branch',
  templateUrl: './view-branch.component.html',
  styleUrls: ['./view-branch.component.css']
})
export class ViewBranchComponent implements  OnInit{

  constructor( ) {

  }

  @Input() _branchModel:any=""

  ngOnInit(): void {
    console.log(this._branchModel)
  }




}
