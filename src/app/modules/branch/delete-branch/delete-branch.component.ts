import {Component, Input, OnInit} from '@angular/core';
import {BranchService} from "../branch.service";

@Component({
  selector: 'app-delete-branch',
  templateUrl: './delete-branch.component.html',
  styleUrls: ['./delete-branch.component.css']
})
export class DeleteBranchComponent implements OnInit{
  @Input() _branchModel: any


  constructor( private branchService: BranchService) {
    console.log(this._branchModel)
  }

  ngOnInit(): void {
  }

  deleteBranch(id: number) {
    console.log(id)
    this.branchService.removeBranch(id)    .subscribe({
      next: data => {
        console.log(data+'Delete successful')
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }
}
