import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimComponent } from './prim.component';

describe('PrimComponent', () => {
  let component: PrimComponent;
  let fixture: ComponentFixture<PrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
