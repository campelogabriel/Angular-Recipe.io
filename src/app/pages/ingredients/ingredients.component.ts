import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent {
  isLoading: boolean = false;

  formInput: FormGroup;

  recipeArr: Array<number> = [];

  constructor(private fb: FormBuilder) {
    this.formInput = this.fb.group({
      ingredients: [''],
    });
  }

  onSearch() {
    console.log(this.formInput.value.ingredients);
    this.formInput.reset();

    this.isLoading = true;

    setTimeout(() => {
      this.recipeArr = [0, 1, 2, 3, 4, 5, 6];
      this.isLoading = false;
    }, 1500);
  }
}
