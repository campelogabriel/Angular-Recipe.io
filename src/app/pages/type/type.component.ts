import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {
  valueType: string | null;
  isLoading: boolean;

  offSet: number = 0;

  recipes: any;

  @ViewChild('btnMore')
  btnMore: ElementRef;

  @ViewChild('btnPreviews')
  btnLess: ElementRef;

  constructor(
    private router: ActivatedRoute,
    private recipeService: RecipesService
  ) {
    this.router.paramMap.subscribe(
      (res) => (this.valueType = res.get('value'))
    );
  }
  ngOnInit(): void {
    this.isLoading = true;
    this.recipeService
      .getRecipeType(this.valueType, String(this.offSet))
      .subscribe((res) => {
        this.isLoading = false;
        this.recipes = res.results;
      });
  }

  setPreviewsRecipes() {
    this.isLoading = true;

    if (this.offSet == 0) {
      // Removendo o botão quando não exister mais dados pra buscar
      this.btnLess.nativeElement.remove();
      return;
    }
    this.offSet -= 10;
    this.recipeService
      .getRecipeType(this.valueType, String(this.offSet))
      .subscribe((res) => {
        this.isLoading = false;
        this.recipes = res.results;
      });
  }

  setMoreRecipes() {
    this.isLoading = true;

    if (this.offSet == 900) {
      // Removendo o botão quando não exister mais dados pra buscar
      this.btnMore.nativeElement.remove();
      return;
    }
    this.offSet += 10;
    this.recipeService
      .getRecipeType(this.valueType, String(this.offSet))
      .subscribe((res) => {
        this.isLoading = false;
        this.recipes = res.results;
      });
  }
}
