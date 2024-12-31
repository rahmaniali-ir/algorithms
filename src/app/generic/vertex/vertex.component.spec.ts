import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertexComponent } from './vertex.component';

describe('VertexComponent', () => {
  let component: VertexComponent;
  let fixture: ComponentFixture<VertexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [VertexComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(VertexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
