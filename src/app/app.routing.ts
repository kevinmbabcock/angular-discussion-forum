import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookingComponent } from './cooking/cooking.component';
import { SportsComponent } from './sports/sports.component';
import { CategoriesComponent } from './categories/categories.component';


const appRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'cooking',
    component: CookingComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
