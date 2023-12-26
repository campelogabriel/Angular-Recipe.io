import { Component, OnInit } from '@angular/core';
import { Observable, catchError, concatMap, from, of, tap } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  isLogged$: Observable<any>;
  recipes$: Observable<any>;

  recipeFavs: string[];

  constructor(
    private authService: AuthorizationService,
    private recipeService: RecipesService
  ) {
    document.title = 'Favorite Page - Recipe.io';

    this.isLogged$ = this.authService.isAuthorizated();
    this.authService
      .getUser()
      .subscribe(
        (user) => (this.recipeFavs = JSON.parse(user).favoriteRecipes)
      );
  }

  ngOnInit(): void {}
}
