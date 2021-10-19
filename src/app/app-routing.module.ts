import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddFoodComponent } from './add-food/add-food.component';
import { DispFoodComponent } from './disp-food/disp-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { ListFoodComponent } from './list-food/list-food.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'add-food', component: AddFoodComponent },
  { path: 'disp-food/:id', component: DispFoodComponent },
  { path: 'list-food', component: ListFoodComponent },
  { path: 'edit-food/:id', component: EditFoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterTestingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
