import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';


import { MoviesComponent } from './page/movies/movies.component';
import { MovieEditComponent } from './page/movie-edit/movie-edit.component';
import { ActorsComponent } from './page/actors/actors.component';
import { ActorEditComponent } from './page/actor-edit/actor-edit.component';
import { DirectorsComponent } from './page/directors/directors.component';
import { DirectorEditComponent } from './page/director-edit/director-edit.component';
import { RatingsComponent } from './page/ratings/ratings.component';
import { RatingEditComponent } from './page/rating-edit/rating-edit.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
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
    path: 'users/edit/:id',
    component: UserEditComponent,
  },

  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/edit/:id',
    component: MovieEditComponent,
  },
  {
    path: 'actors',
    component: ActorsComponent,
  },
  {
    path: 'actors/edit/:id',
    component: ActorEditComponent,
  },
  {
    path: 'directors',
    component: DirectorsComponent,
  },
  {
    path: 'directors/edit/:id',
    component: DirectorEditComponent,
  },
  {
    path: 'ratings',
    component: RatingsComponent,
  },
  {
    path: 'ratings/edit/:id',
    component: RatingEditComponent,
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
