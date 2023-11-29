import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  favorite: boolean = false;
  id: string | null;
  isLoading: boolean = false;

  recipeObj: any;

  constructor(
    private router: ActivatedRoute,
    private recipeService: RecipesService
  ) {
    this.router.paramMap.subscribe((params) => (this.id = params.get('id')));

    this.isLoading = true;

    this.recipeService.getRecipeId(this.id).subscribe((res) => {
      this.isLoading = false;
      this.recipeObj = res;
      console.log(this.recipeObj);
    });
  }

  ngOnInit(): void {
    window.document.title = 'test';
  }

  isFavorite(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.favorite = !this.favorite;
      this.isLoading = false;
    }, 700);
    console.log(this.favorite);
  }
}
