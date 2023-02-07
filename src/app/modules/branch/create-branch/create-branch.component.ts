import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BranchService} from "../branch.service";
import {FormControl, FormGroup} from "@angular/forms";
import {catchError, throwError, timer} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})

export class CreateBranchComponent implements OnInit, OnDestroy {
  branchGroupForm = new FormGroup({
    branchCode: new FormControl(''),
    branchName: new FormControl(''),
    degree: new FormControl(''),
    supBranch: new FormControl(''),
    activeDate: new FormControl(''),
    active: new FormControl('')
  });
  branchList: any = []
  success = false;

  constructor(private router: Router, private branchService: BranchService) {
  }

  ngOnInit(): void {

  }

  addBranch() {
    this.branchService.addNewBranch(this.branchGroupForm.value).subscribe({
      next: () => {
        this.branchGroupForm.reset()
        this.success = true
        setInterval(() => {
          this.success = false
        }, 1000)
      }, error: err => console.log(err)
    })
  }


  ngOnDestroy(): void {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
