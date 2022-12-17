import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/models/appState.interface';
import { UsersInterface } from 'src/app/models/user.interface';
import {
  errorSelector,
  isLoadingSelector,
  userSelector,
} from '../store/selector';
import * as UsersAction from '../store/actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userData: any[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  loading$: Observable<boolean>;
  errors$: Observable<string | null>;
  users$: Observable<UsersInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.loading$ = this.store.select(isLoadingSelector);
    this.errors$ = this.store.select(errorSelector);
    this.users$ = this.store.select(userSelector);
  }
  ngOnInit(): void {
    this.store.dispatch(UsersAction.getUsers());
  }
}
