import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user$: Observable<User> = this.ar.params.pipe(
    switchMap(params => this.userService.get(params.id))
  );
  user: User = new User();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => {
        this.user = user;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {

    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.user._id}),
      new InputField({key: 'firstName', label: 'First Name', type: 'text', value: this.user.firstName as string}),
      new InputField({key: 'lastName', label: 'Last Name', type: 'text', value: this.user.lastName as string}),
      new InputField({key: 'email', label: 'Email', type: 'text', value: this.user.email as string}),
      new InputField({key: 'address', label: 'Address', type: 'text', value: this.user.address as string}),
      // new InputField({key: 'active', label: 'Active', type: 'boolean', value: this.user.active as boolean}),
    ];
  }

  onSave(user: User): void {
    this.userService.update(user).subscribe(
      p => this.router.navigate(['/', 'users'])
    );
  }


}
