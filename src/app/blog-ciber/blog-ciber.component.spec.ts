import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCiberComponent } from './blog-ciber.component';

describe('BlogCiberComponent', () => {
  let component: BlogCiberComponent;
  let fixture: ComponentFixture<BlogCiberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCiberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogCiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
