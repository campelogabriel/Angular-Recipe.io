import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRecipeComponent } from './item-recipe.component';

describe('ItemRecipeComponent', () => {
  let component: ItemRecipeComponent;
  let fixture: ComponentFixture<ItemRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemRecipeComponent]
    });
    fixture = TestBed.createComponent(ItemRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
