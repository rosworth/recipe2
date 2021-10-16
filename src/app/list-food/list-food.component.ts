import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css'],
})
export class ListFoodComponent implements OnInit {
  items: Observable<Food[]> | undefined;

  constructor(private fs: FoodService, private router: Router) {}
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.items = this.fs.getRecipeList();
  }
  foodInfo(id: number) {
    this.router.navigate(['disp-food', id]);
  }

  editFood(id: number) {
    this.router.navigate(['edit-food', id]);
  }
  deleteFood(id: number) {
    this.fs.deleteRecipe(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }
}
