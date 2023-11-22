import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ItemRecipeComponent } from './components/item-recipe/item-recipe.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormSignupComponent } from './components/form-signup/form-signup.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ItemRecipeComponent,
    RecipeComponent,
    FormLoginComponent,
    FormSignupComponent,
    FavoriteComponent,
    IngredientsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
