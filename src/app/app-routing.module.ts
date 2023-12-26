import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { authorizationGuard } from './guards/authorization.guard';
import { TypeComponent } from './pages/type/type.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    title: 'Welcome to Recipe.io',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'type/:value',
    component: TypeComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    title: 'Login Page',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'recipe/:id',
    title: 'Recipe Title',
    component: RecipeComponent,
  },
  {
    path: 'favorites',
    component: FavoriteComponent,
    pathMatch: 'full',
    canActivate: [authorizationGuard],
  },
  {
    path: 'ingredients',
    component: IngredientsComponent,
    pathMatch: 'full',
  },
  {
    path: 'edit',
    component: EditComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'about',
  //   component: RecipeComponent,
  //   pathMatch: 'full',
  // },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
