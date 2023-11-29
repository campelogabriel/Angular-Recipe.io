import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent {
  isLoading: boolean = false;

  formInput: FormGroup;

  recipeArr: Array<any> = [];

  constructor(private fb: FormBuilder, private serviceRecipe: RecipesService) {
    document.title = 'Ingredients Page - Recipe.io';
    this.formInput = this.fb.group({
      ingredients: [''],
    });
  }

  onSearch() {
    const values = this.formInput.value.ingredients
      .split(',')
      .map((v) => `+${v}`)
      .join(',');

    this.formInput.reset();

    this.isLoading = true;

    // apples,+flour,+sugar

    this.serviceRecipe.getRecipeIngredients(values).subscribe((res) => {
      this.isLoading = false;
      this.recipeArr = res;
      console.log(res);
    });
  }
}
