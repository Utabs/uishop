import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {BranchService} from "../branch.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.css']
})
export class UpdateBranchComponent {
  @Input() _branchModel: any = {}
  @Output() branchList_u_ref: EventEmitter<any> = new EventEmitter<any>()

  constructor(private router: Router, private branchService: BranchService) {
  }

  ngOnInit(): void {
    console.log(this._branchModel)
  }

  updateBranch() : boolean {
    this.branchService.updateBranch(this._branchModel.id, this._branchModel).subscribe(
      {
        next: data => {
          console.log(data)
          this.branchService.getBranchList().subscribe(data =>this.branchList_u_ref.emit(data))
          return true
        }
        , error: err => {console.log("errror" + err); return false}
      })
    return false

  }

}
