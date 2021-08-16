import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Director } from '../model/director';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class DirectorService extends BaseService<Director> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'directors';
  }

  getAll(): Observable<Director[]> {
    return this.http.get<Director[]>(`${this.config.apiUrl}${this.entity}?_expand=user`)
  }
}
