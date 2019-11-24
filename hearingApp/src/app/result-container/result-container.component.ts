import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent {
  public result$: Observable<number>;
  public user$: Observable<User>;

  constructor(public store: Store<fromRoot.State>) {
    this.result$ = store.select(fromRoot.getResultState);
    this.user$ = store.select(fromRoot.getUserDetailsState);
  }

}
