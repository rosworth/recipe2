import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
})
export class AddFoodComponent implements OnInit {
  item: Food = new Food();
  submitted = false;
  foodForm!: FormGroup;
  itemName!: FormControl;
  itemDesc!: FormControl;

  constructor(private fs: FoodService, private router: Router) {}

  ngOnInit() {
    this.foodForm = new FormGroup({
      itemName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      itemDesc: new FormControl('', Validators.required),
    });
  }

  addItem(): void {
    this.submitted = false;
    this.item = new Food();
  }

  save() {
    this.fs.addRecipe(this.item).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.item = new Food();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/disp-food']);
  }
}
