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

  constructor(private fs: FoodService, private router: Router) {}

  ngOnInit() {
    this.foodForm = new FormGroup({
      foodName: new FormControl('', Validators.required),
      foodDesc: new FormControl('', Validators.required),
      foodImg: new FormControl('', Validators.pattern(/\.(jpeg|jpg|gif|png)$/)),
    });
  }

  addItem(): void {
    this.submitted = false;
    this.item = new Food();
    this.foodForm.reset();
  }

  tester() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        'submit',
        function (event: {
          preventDefault: () => void;
          stopPropagation: () => void;
        }) {
          if (!form.checkValidity()) {
            console.log(1);
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        },
        false
      );
      form.reportValidity();
    });
  }

  save() {
    this.tester();
    if (this.foodForm.valid) {
      this.fs.addRecipe(this.item).subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
      this.item = new Food();
      this.gotoList();
      this.submitted = true;
    }
  }

  gotoList() {
    this.router.navigate(['/disp-food']);
  }
}
