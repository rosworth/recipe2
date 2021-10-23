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
  i!: number;
  item!: Food;
  foodForm!: FormGroup;
  foodIngr!: FormArray;

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
      foodIngr: this.fb.array([this.fb.control('')]),
    });
  }

  ngOnInit() {
    this.item = new Food();
    this.id = this.route.snapshot.params['id'];

    this.fs.getRecipe(this.id).subscribe(
      (data) => {
        console.log(data);
        this.item = data;
        for (let i = 0; i < this.item.foodIngr.length; i++) {
          this.addIngr();
        }
      },
      (error) => console.log(error)
    );
    console.log(this.getIngr.value);
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
    newIngr.push(this.fb.control(''));
  }

  delIngr(i: number) {
    this.getIngr.removeAt(i - 1);
  }

  patchFood() {
    this.fs.editRecipe(this.id, this.foodForm.value).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.list();
  }

  tester() {
    console.log(this.foodForm.value);
  }

  onSubmit() {
    //this.patchFood();
  }

  list() {
    this.router.navigate(['/list-food']);
  }
}
