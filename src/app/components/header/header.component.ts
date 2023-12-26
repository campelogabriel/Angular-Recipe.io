import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: string;
  isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthorizationService) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthorizated();
    this.authService
      .getUser()
      .subscribe((res) => (this.name = JSON.parse(res).name));
  }

  setLogout() {
    this.authService.logOut();
    window.location.href = '/auth/login';
  }
}
