import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListFoodComponent } from './list-food.component';

describe('ListFoodComponent', () => {
  let component: ListFoodComponent;
  let fixture: ComponentFixture<ListFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFoodComponent],
      imports: [RouterTestingModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
