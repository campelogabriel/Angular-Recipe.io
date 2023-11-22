import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  favorite: boolean = false;
  id: number | null;
  isLoading: boolean = false;

  constructor(private router: ActivatedRoute) {
    this.router.paramMap.subscribe(
      (params) => (this.id = Number(params.get('id')))
    );
    console.log(this.id);
  }

  ngOnInit(): void {
    window.document.title = 'test';
  }

  isFavorite(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.favorite = !this.favorite;
      this.isLoading = false;
    }, 700);
    console.log(this.favorite);
  }
}
