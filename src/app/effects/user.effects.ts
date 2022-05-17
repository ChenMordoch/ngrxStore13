import { UsersService } from './../users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadUsers, LoadUsersSuccess } from '../action/users.actions';
// import { LoadUsers, LoadUsersSuccess } from '../action/users.actions';


@Injectable()
export class UserEffects {


  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(() => this.usersService.getConfig()
      .pipe(
        map(users => (LoadUsersSuccess(users))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
    console.log("effects");

  }
}
