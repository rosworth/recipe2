import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private baseUrl = 'http://localhost:3000/food';
  constructor(private http: HttpClient) {}

  getRecipe(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getRecipeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  addRecipe(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  editRecipe(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
