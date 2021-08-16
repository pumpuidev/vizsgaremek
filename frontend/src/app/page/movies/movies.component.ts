import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.movieColumns;
  list$: Observable<Movie[]> = this.movieService.getAll();

  constructor(
    private config: ConfigService,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
  }

}
