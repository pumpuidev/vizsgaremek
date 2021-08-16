import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Rating } from 'src/app/model/rating';
import { RatingService } from 'src/app/service/rating.service';

@Component({
  selector: 'app-rating-edit',
  templateUrl: './rating-edit.component.html',
  styleUrls: ['./rating-edit.component.scss']
})
export class RatingEditComponent implements OnInit {


  rating$: Observable<Rating> = this.ar.params.pipe(
    switchMap(params => this.ratingService.get(params.id))
  );
  rating: Rating = new Rating();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private ratingService: RatingService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.rating$.subscribe(
      rating => {
        this.rating = rating;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {

    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.rating._id}),
      new InputField({key: 'movie', label: 'Movie', type: 'text', value: this.rating.movie as string}),
      // new InputField({key: 'year', label: 'Year', type: 'number', value: this.rating.year as number}),
      // new InputField({key: 'favourite', label: 'Favourite', type: 'boolean', value: this.rating.favourite as boolean}),
      // new InputField({key: 'rating', label: 'Rating', type: 'number', value: this.rating.rating as number}),
      new InputField({key: 'description', label: 'Description', type: 'text', value: this.rating.description as string}),

    ];
  }

  onSave(rating: Rating): void {
    this.ratingService.update(rating).subscribe(
      p => this.router.navigate(['/', 'ratings'])
    );
  }

}
