import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Director } from 'src/app/model/director';
import { DirectorService } from 'src/app/service/director.service';

@Component({
  selector: 'app-director-edit',
  templateUrl: './director-edit.component.html',
  styleUrls: ['./director-edit.component.scss']
})
export class DirectorEditComponent implements OnInit {

  director$: Observable<Director> = this.ar.params.pipe(
    switchMap(params => this.directorService.get(params.id))
  );
  director: Director = new Director();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private directorService: DirectorService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.director$.subscribe(
      director => {
        this.director = director;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {

    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.director._id}),
      new InputField({key: 'firstName', label: 'First Name', type: 'text', value: this.director.firstName as string}),
      new InputField({key: 'lastName', label: 'Last Name', type: 'text', value: this.director.lastName as string}),
      // new InputField({key: 'year', label: 'Year', type: 'number', value: this.director.year as number}),
      new InputField({key: 'movie', label: 'Movie', type: 'text', value: this.director.movie as string}),
      // new InputField({key: 'alive', label: 'Alive', type: 'boolean', value: this.director.alive as boolean}),
    ];
  }

  onSave(director: Director): void {
    this.directorService.update(director).subscribe(
      p => this.router.navigate(['/', 'directors'])
    );
  }


}
