import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-disp-food',
  templateUrl: './disp-food.component.html',
  styleUrls: ['./disp-food.component.css'],
})
export class DispFoodComponent implements OnInit {
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

  list() {
    this.router.navigate(['list-food']);
  }
}
