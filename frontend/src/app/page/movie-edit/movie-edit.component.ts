import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {


  movie$: Observable<Movie> = this.ar.params.pipe(
    switchMap(params => this.movieService.get(params.id))
  );
  movie: Movie = new Movie();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private movieService: MovieService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.movie$.subscribe(
      movie => {
        this.movie = movie;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {

    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.movie._id}),
      new InputField({key: 'title', label: 'Title', type: 'text', value: this.movie.title as string}),
      new InputField({key: 'genre', label: 'Genre', type: 'text', value: this.movie.genre as string}),
      // new InputField({key: 'year', label: 'Year', type: 'number', value: this.movie.year as number}),
      new InputField({key: 'producer', label: 'Producer', type: 'text', value: this.movie.producer as string}),
      // new InputField({key: 'watchlist', label: 'Watchlist', type: 'boolean', value: this.movie.watchlist as boolean}),
    ];
  }

  onSave(movie: Movie): void {
    this.movieService.update(movie).subscribe(
      p => this.router.navigate(['/', 'movies'])
    );
  }


}
