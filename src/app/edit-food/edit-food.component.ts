import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css'],
})
export class EditFoodComponent implements OnInit {
  id!: number;
  item!: Food;
  foodForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fs: FoodService,
    private fb: FormBuilder
  ) {
    this.foodForm = this.fb.group({
      foodName: ['', Validators.required],
      foodDesc: ['', Validators.required],
      foodImg: ['', Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i)],
      foodIngr: this.fb.array([this.fb.control(false)]),
    });
  }

  ngOnInit() {
    this.item = new Food();
    this.id = this.route.snapshot.params['id'];

    this.fs.getRecipe(this.id).subscribe(
      (data) => {
        this.item = data;
        for (let i = 0; i < this.item.foodIngr.length; i++) {
          this.addIngr();
        }
      },
      (error) => console.log(error)
    );
  }

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

  addIngr() {
    let newIngr = this.foodForm.get('foodIngr') as FormArray;
    newIngr.push(this.fb.control(false));
  }

  delIngr(i: number) {
    this.item.foodIngr.splice(i, 1);
    this.getIngr.removeAt(i);
  }

  patchFood() {
    this.removeNull();
    this.fs.editRecipe(this.id, this.foodForm.value).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.gotoList();
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
