import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
export class HomeComponent {
  private SubjectTest$: BehaviorSubject<Account[]> = new BehaviorSubject<
    Account[]
  >([]);
  constructor() {
    document.title = 'Home Page - Recipe.io';

    this.SubjectTest$.next([
      { id: 1, name: 'Gabriel' },
      { id: 2, name: 'Sophia' },
      { id: 3, name: 'Luciana' },
    ]);

    this.SubjectTest$.subscribe((res) => console.log(res));
  }
}
