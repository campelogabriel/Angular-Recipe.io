import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  readonly urlRecipeById: string =
    'https://api.spoonacular.com/recipes/<id>/information?apiKey=0acca52bb0c048a6afe611c64b150183';

  readonly urlRecipeByIng: string =
    'https://api.spoonacular.com/recipes/findByIngredients?apiKey=0acca52bb0c048a6afe611c64b150183&ingredients=<ing>&number=50';

  readonly urlRecipeByType: string =
    'https://api.spoonacular.com/recipes/complexSearch?apiKey=0acca52bb0c048a6afe611c64b150183&type=<type>&offset=<offset>';
  constructor(private http: HttpClient) {}

  getRecipeId(id: any): any {
    return this.http.get<any>(this.urlRecipeById.replace('<id>', id));
  }

  getRecipeIngredients(ing: string): Observable<any> {
    return this.http.get<any>(this.urlRecipeByIng.replace('<ing>', ing));
  }

  getRecipeType(type: any, offset: string): Observable<any> {
    return this.http.get<any>(
      this.urlRecipeByType.replace('<type>', type).replace('<offset>', offset)
    );
  }
}
