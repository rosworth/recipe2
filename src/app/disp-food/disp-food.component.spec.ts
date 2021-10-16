import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispFoodComponent } from './disp-food.component';

describe('DispFoodComponent', () => {
  let component: DispFoodComponent;
  let fixture: ComponentFixture<DispFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
