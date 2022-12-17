import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import * as UserActions from './actions';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUsers),
      mergeMap(() => {
        return this.userService.getUsers().pipe(
          map((users) => UserActions.getUsersSuccess({ users })),
          catchError((error) =>
            of(UserActions.getUsersFail({ error: error.message }))
          )
        );
      })
    )
  );
}
