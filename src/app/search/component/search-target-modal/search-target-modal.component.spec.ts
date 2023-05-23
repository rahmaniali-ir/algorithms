import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTargetModalComponent } from './search-target-modal.component';

describe('SearchTargetModalComponent', () => {
  let component: SearchTargetModalComponent;
  let fixture: ComponentFixture<SearchTargetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTargetModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTargetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
