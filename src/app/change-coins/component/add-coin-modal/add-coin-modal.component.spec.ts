import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoinModalComponent } from './add-coin-modal.component';

describe('AddCoinModalComponent', () => {
  let component: AddCoinModalComponent;
  let fixture: ComponentFixture<AddCoinModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoinModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
