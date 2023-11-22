import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: string | null;
  isLogged: boolean;

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin() {
    if (!localStorage.getItem('token')) return;

    this.name = localStorage.getItem('name');
  }
}
