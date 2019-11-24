import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import {DetailsChangeAction} from '../actions/userDetails';
import {User} from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  detailsForm;
  validationMessages = {
    name: [
      { type: 'required', message: 'Username is required' },
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
  };

  constructor(public store: Store<fromRoot.State>, private formBuilder: FormBuilder, private router: Router) {
    this.detailsForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    });
  }

  onSubmit(customerData) {
    const user = new User();
    user.name = customerData.name;
    user.email = customerData.email;
    this.store.dispatch(new DetailsChangeAction(user));
    this.router.navigate(['/test']);
  }
}
