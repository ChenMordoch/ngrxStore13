import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
  '[Users] USER LOAD USERS',
);

export const LoadUsersSuccess = createAction(
  '[Users] USER LOAD USERS Success',
  props<{ data: any }>()
);

export const LoadUsersFailure = createAction(
  '[Users] USER LOAD USERS Failure',
  props<{ error: any }>()
);

export const AddUsers = createAction(
  '[Users] USER LOAD USERS',
);

export const AddUsersSuccess = createAction(
  '[Users] USER LOAD USERS Success',
  props<{ data: any }>()
);

export const AddUsersFailure = createAction(
  '[Users] USER LOAD USERS Failure',
  props<{ error: any }>()
);

