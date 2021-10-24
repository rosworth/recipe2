import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddFoodComponent } from './add-food/add-food.component';
import { DispFoodComponent } from './disp-food/disp-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { ListFoodComponent } from './list-food/list-food.component';

const routes: Routes = [
  { path: 'add-food', component: AddFoodComponent },
  { path: 'list-food', component: ListFoodComponent },
  { path: 'disp-food/:id', component: DispFoodComponent },
  { path: 'edit-food/:id', component: EditFoodComponent },
  { path: '', redirectTo: 'list-food', pathMatch: 'full' },
  { path: '**', redirectTo: 'list-food', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterTestingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
