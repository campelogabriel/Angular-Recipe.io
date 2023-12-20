import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';

interface Account {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [],
})
export class HomeComponent implements OnInit {
  test$: Observable<any>;
  constructor(
    private router: Router,
    private authService: AuthorizationService
  ) {
    document.title = 'Home Page - Recipe.io';
  }

  ngOnInit(): void {
    this.test$ = this.authService.isAuthorizated();
    this.test$.subscribe((res) => console.log(res));
  }

  selectType(event) {
    console.log(event);
    this.router.navigate(['/type', event]);
  }
}
