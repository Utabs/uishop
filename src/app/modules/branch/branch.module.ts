import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { ListBranchComponent } from './list-branch/list-branch.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { DeleteBranchComponent } from './delete-branch/delete-branch.component';
import { ViewBranchComponent } from './view-branch/view-branch.component';
import { BranchComponent } from './branch.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        ListBranchComponent,
        CreateBranchComponent,
        UpdateBranchComponent,
        SearchBranchComponent,
        DeleteBranchComponent,
        ViewBranchComponent,
        BranchComponent
    ],
    exports: [
        ViewBranchComponent
    ],
    imports: [
        CommonModule,
        BranchRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class BranchModule { }
