import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService<Movie> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'movies';
  }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.config.apiUrl}${this.entity}?_expand=user`)
  }
}
