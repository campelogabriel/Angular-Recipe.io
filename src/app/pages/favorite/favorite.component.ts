import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  isLogged$: Observable<any>;

  constructor(
    private authService: AuthorizationService,
    private recipeService: RecipesService
  ) {
    document.title = 'Favorite Page - Recipe.io';

    this.isLogged$ = this.authService.isAuthorizated();
  }

  ngOnInit(): void {}
}
