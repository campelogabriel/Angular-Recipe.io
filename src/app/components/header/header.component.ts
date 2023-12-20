import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: string | null = 'Gabriel Campelo';

  isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthorizationService) {
    this.isAuthenticated$ = this.authService.isAuthorizated();
    this.isAuthenticated$.subscribe((a) => console.log(a));
  }

  ngOnInit(): void {}

  setLogout() {
    this.authService.logOut();
    window.location.href = '/auth/login';
  }
}
