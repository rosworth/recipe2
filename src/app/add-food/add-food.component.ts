import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
})
export class AddFoodComponent implements OnInit {
  submitted = false;
  foodForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fs: FoodService,
    private router: Router
  ) {
    this.foodForm = this.fb.group({
      foodName: ['', Validators.required],
      foodDesc: ['', Validators.required],
      foodImg: ['', Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i)],
      foodIngr: this.fb.array([this.fb.control('')]),
    });
  }

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
  get getIngr() {
    return this.foodForm.get('foodIngr') as FormArray;
  }

  addItem(): void {
    this.submitted = false;
    this.resetForm();
  }

  delIngr(i: number) {
    this.getIngr.removeAt(i);
  }

  addIngr() {
    let newIngr = this.foodForm.get('foodIngr') as FormArray;
    newIngr.push(this.fb.control(''));
  }

  tester() {
    this.removeNull();
    console.log(this.foodForm.value);
  }

  save() {
    this.removeNull();
    if (this.foodForm.valid) {
      console.log(this.foodForm.value);
      this.fs.addRecipe(this.foodForm.value).subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
      this.submitted = true;
    }
  }

  resetForm() {
    this.getIngr.clear();
    this.addIngr();
    this.foodForm.reset();
  }

  removeNull() {
    console.log(this.getIngr.length);
    let i = 0;
    do {
      switch (this.getIngr.value[i]) {
        case null: {
          this.getIngr.removeAt(i);
          break;
        }
        case undefined: {
          this.getIngr.removeAt(i);
          break;
        }
        case '': {
          this.getIngr.removeAt(i);
          break;
        }
        default: {
          i++;
          break;
        }
      }
    } while (i < this.getIngr.length);
  }

  gotoList() {
    this.router.navigate(['/list-food']);
  }
}
