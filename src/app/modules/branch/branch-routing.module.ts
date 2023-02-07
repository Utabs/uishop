import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListBranchComponent} from "./list-branch/list-branch.component";
import {CreateBranchComponent} from "./create-branch/create-branch.component";
import {UpdateBranchComponent} from "./update-branch/update-branch.component";
import {SearchBranchComponent} from "./search-branch/search-branch.component";
import {DeleteBranchComponent} from "./delete-branch/delete-branch.component";
import {ViewBranchComponent} from "./view-branch/view-branch.component";
import {BranchComponent} from "./branch.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: BranchComponent},
      {path: 'add', component: CreateBranchComponent},
      {path: 'edit', component: UpdateBranchComponent},
      {path: 'search', component: SearchBranchComponent},
      {path: 'delete', component: DeleteBranchComponent},
      {path: 'view', component: ViewBranchComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchRoutingModule {
}
