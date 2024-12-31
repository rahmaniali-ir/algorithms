import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KruskalComponent } from './kruskal.component';

describe('KruskalComponent', () => {
  let component: KruskalComponent;
  let fixture: ComponentFixture<KruskalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [KruskalComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(KruskalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
