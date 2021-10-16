import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddFoodComponent } from './add-food/add-food.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DispFoodComponent } from './disp-food/disp-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { ListFoodComponent } from './list-food/list-food.component';


@NgModule({
  declarations: [
    AppComponent,
    AddFoodComponent,
    DispFoodComponent,
    ListFoodComponent,
    EditFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
