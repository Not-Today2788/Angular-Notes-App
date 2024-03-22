import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsigninComponent } from './newsignin.component';

describe('NewsigninComponent', () => {
  let component: NewsigninComponent;
  let fixture: ComponentFixture<NewsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsigninComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
