import { Component } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  isLogin: Boolean = false;

  constructor(private authService: AuthorizationService) {
    document.title = 'Favorite Page - Recipe.io';

    if (this.authService.isAuthorizated()) this.isLogin = true;
  }
}
