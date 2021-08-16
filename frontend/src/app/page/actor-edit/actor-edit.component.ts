import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Actor } from 'src/app/model/actor';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.scss']
})
export class ActorEditComponent implements OnInit {

  actor$: Observable<Actor> = this.ar.params.pipe(
    switchMap(params => this.actorService.get(params.id))
  );
  actor: Actor = new Actor();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private actorService: ActorService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.actor$.subscribe(
      actor => {
        this.actor = actor;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {

    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.actor._id}),
      new InputField({key: 'firstName', label: 'First Name', type: 'text', value: this.actor.firstName as string}),
      new InputField({key: 'lastName', label: 'Last Name', type: 'text', value: this.actor.lastName as string}),
      // new InputField({key: 'year', label: 'Year', type: 'number', value: this.actor.year as number}),
      new InputField({key: 'movie', label: 'Movie', type: 'text', value: this.actor.movie as string}),
      // new InputField({key: 'alive', label: 'Alive', type: 'boolean', value: this.actor.alive as boolean}),
    ];
  }

  onSave(actor: Actor): void {
    this.actorService.update(actor).subscribe(
      p => this.router.navigate(['/', 'actors'])
    );
  }


}
