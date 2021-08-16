import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
// ezek ki
import { OrdersComponent } from './page/orders/orders.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { ProductsComponent } from './page/products/products.component';

import { MoviesComponent } from './page/movies/movies.component';
import { ActorsComponent } from './page/actors/actors.component';
import { DirectorsComponent } from './page/directors/directors.component';
import { RatingsComponent } from './page/ratings/ratings.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'actors',
    component: ActorsComponent,
  },
  {
    path: 'directors',
    component: DirectorsComponent,
  },
  {
    path: 'ratings',
    component: RatingsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
