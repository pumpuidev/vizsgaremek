import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../model/actor';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService extends BaseService<Actor> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'actors';
  }

  getAll(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${this.config.apiUrl}${this.entity}?_expand=user`)
  }
}
