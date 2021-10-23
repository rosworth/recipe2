import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
})
export class AddFoodComponent implements OnInit {
  submitted = false;

  foodForm = new FormGroup({
    foodName: new FormControl('', Validators.required),
    foodDesc: new FormControl('', Validators.required),
    foodImg: new FormControl(
      '',
      Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i)
    ),
  });

  constructor(private fs: FoodService, private router: Router) {}

  ngOnInit() {}

  get foodName() {
    return this.foodForm.get('foodName');
  }
  get foodDesc() {
    return this.foodForm.get('foodDesc');
  }
  get foodImg() {
    return this.foodForm.get('foodImg');
  }

  addItem(): void {
    this.submitted = false;
    this.foodForm.reset();
  }

  save() {
    if (this.foodForm.valid) {
      console.log(this.foodForm.value);
      this.fs.addRecipe(this.foodForm.value).subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
      this.submitted = true;
    }
  }

  gotoList() {
    this.router.navigate(['/list-food']);
  }
}
