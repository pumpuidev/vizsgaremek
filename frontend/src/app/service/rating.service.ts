import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../model/rating';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RatingService extends BaseService<Rating> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'ratings';
  }

  getAll(): Observable<Rating[]> {
    return this.http.get<Rating[]>(`${this.config.apiUrl}${this.entity}?_expand=user`)
  }
}
