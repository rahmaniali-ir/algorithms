import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMatrixModalComponent } from './create-matrix-modal.component';

describe('CreateMatrixModalComponent', () => {
  let component: CreateMatrixModalComponent;
  let fixture: ComponentFixture<CreateMatrixModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CreateMatrixModalComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(CreateMatrixModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
