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
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SelectorsComponent } from './components/selectors/selectors.component';
import { TypeComponent } from './pages/type/type.component';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ItemRecipeComponent,
    RecipeComponent,
    FavoriteComponent,
    IngredientsComponent,
    SelectorsComponent,
    TypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
