import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-recipe',
  templateUrl: './item-recipe.component.html',
  styleUrls: ['./item-recipe.component.scss'],
})
export class ItemRecipeComponent {
  @Input() id: number;
  @Input() image: string;
  @Input() title: string;
}
