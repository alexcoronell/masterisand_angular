import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsSectionComponent } from './promotions-section.component';

describe('PromotionsSectionComponent', () => {
  let component: PromotionsSectionComponent;
  let fixture: ComponentFixture<PromotionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
