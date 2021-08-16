import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';

registerLocaleData(localeHu);

import { AreusFormModule } from './areus-form/areus-form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { UsersComponent } from './page/users/users.component';
// ezek ki
import { ProductsComponent } from './page/products/products.component';
import { OrdersComponent } from './page/orders/orders.component';

import { DataTableComponent } from './common/data-table/data-table.component';
import { XPipePipe } from './pipe/x-pipe.pipe';
import { LoginComponent } from './page/login/login.component';
//ez ki
import { ProductEditComponent } from './page/product-edit/product-edit.component';

import { JwtInterceptorInterceptor } from './service/jwt-interceptor.interceptor';
import { MoviesComponent } from './page/movies/movies.component';
import { ActorsComponent } from './page/actors/actors.component';
import { DirectorsComponent } from './page/directors/directors.component';
import { RatingsComponent } from './page/ratings/ratings.component';
import { MovieEditComponent } from './page/movie-edit/movie-edit.component';
import { MovieActorComponent } from './page/movie-actor/movie-actor.component';
import { ActorEditComponent } from './page/actor-edit/actor-edit.component';
import { RatingEditComponent } from './page/rating-edit/rating-edit.component';
import { DirectorEditComponent } from './page/director-edit/director-edit.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    OrdersComponent,
    DataTableComponent,
    XPipePipe,
    LoginComponent,
    ProductEditComponent,
    MoviesComponent,
    ActorsComponent,
    DirectorsComponent,
    RatingsComponent,
    MovieEditComponent,
    MovieActorComponent,
    ActorEditComponent,
    RatingEditComponent,
    DirectorEditComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AreusFormModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'hu-HU'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
