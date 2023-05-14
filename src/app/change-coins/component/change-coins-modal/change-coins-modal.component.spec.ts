import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCoinsModalComponent } from './change-coins-modal.component';

describe('ChangeCoinsModalComponent', () => {
  let component: ChangeCoinsModalComponent;
  let fixture: ComponentFixture<ChangeCoinsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeCoinsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeCoinsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
