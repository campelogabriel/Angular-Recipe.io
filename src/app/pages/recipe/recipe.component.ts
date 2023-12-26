import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { RecipesService } from 'src/app/services/recipes.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  favorite: boolean = false;
  id: string | null;
  isLoading: boolean = false;
  isAuthorizated: boolean;

  recipeObj: any;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private recipeService: RecipesService,
    private authService: AuthorizationService,
    private userService: UsersService
  ) {
    this.router.paramMap.subscribe((params) => (this.id = params.get('id')));
  }

  ngOnInit(): void {
    this.isLoading = true;

    let favs = JSON.parse(localStorage.getItem('user') || '{}');

    if (favs.favoriteRecipes.includes(Number(this.id))) {
      this.favorite = true;
    }
    this.recipeObj = this.recipeService
      .getRecipeId(this.id)
      .subscribe((res) => {
        this.isLoading = false;
        this.recipeObj = res;
      });

    this.authService
      .isAuthorizated()
      .subscribe((isLogin) => (this.isAuthorizated = true));
  }

  setFavorite() {
    if (!this.isAuthorizated) {
      this.route.navigate(['login']);
      return;
    }

    this.isLoading = true;
    const obj = {
      recipeId: Number(this.id),
    };

    // console.log(obj);

    this.userService
      .setToFavorite(obj, this.favorite ? 'delete' : '')
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.favorite = !this.favorite;

          console.log(res);
        },
        (err) => {
          this.isLoading = false;
          console.log(err);
        }
      );
  }
}
