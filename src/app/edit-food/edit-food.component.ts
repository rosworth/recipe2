import { Component, OnInit } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fs: FoodService
  ) {}

  ngOnInit() {
    this.item = new Food();

    this.id = this.route.snapshot.params['id'];

    this.fs.getRecipe(this.id).subscribe(
      (data) => {
        console.log(data);
        this.item = data;
      },
      (error) => console.log(error)
    );
  }

  patchFood() {
    this.fs.editRecipe(this.id, this.item).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.item = new Food();
    this.gotoList();
  }

  onSubmit() {
    this.patchFood();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
