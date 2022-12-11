import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBranchComponent } from './search-branch.component';

describe('SearchBranchComponent', () => {
  let component: SearchBranchComponent;
  let fixture: ComponentFixture<SearchBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
