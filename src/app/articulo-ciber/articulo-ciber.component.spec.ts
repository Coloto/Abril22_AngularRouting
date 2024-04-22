import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCiberComponent } from './articulo-ciber.component';

describe('ArticuloCiberComponent', () => {
  let component: ArticuloCiberComponent;
  let fixture: ComponentFixture<ArticuloCiberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloCiberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticuloCiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
