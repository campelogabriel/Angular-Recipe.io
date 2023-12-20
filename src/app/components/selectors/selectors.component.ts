import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss'],
})
export class SelectorsComponent {
  @Output()
  type: EventEmitter<string> = new EventEmitter<string>();

  typeArr: string[] = [
    'salad',
    'appetizer',
    'dessert',
    'side dish',
    'main course',
    'bread',
    'breakfast',
    'soup',
    'beverage',
    'sauce',
    'marinade',
    'fingerfood',
    'snack',
    'drink',
  ];
  constructor() {}
  clickEvent(event) {
    this.type.emit(event.target.textContent);
  }
}
