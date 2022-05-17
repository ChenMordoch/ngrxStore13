import {
  ActionReducerMap,
  MetaReducer,
  Action,
  on,
  createReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import * as UsersActions from '../action/users.actions';

export interface UserState {
  userData: User | null [];

  // userData:any;
}

const initialUserState: UserState  = {
  userData: [],
};

export interface AppState {
  users: UserState;
}

export const userdReducer = createReducer(
  initialUserState,
  //   on(UsersActions.LoadUsersSuccess, (state, action) => {
  //     console.log("users",action)
  //     return state;
  // })

  on(UsersActions.LoadUsersSuccess, (state, users) => ({
    userData: users.data,
  })),
//   on(UsersActions.AddUsersSuccess, (state, action) => {
// state.userData.push(action);
//     return state;
//   })

);

// export function userReducer(state: UserState = initialWeatherState, action: WeatherAction): UserState {
//   switch (action.type) {
//     case WeatherActionTypes.LoadWeather:
//       return {
//         weatherData: action.payload.weatherData
//       };

//     default:
//       return state;
//   }
// }

export const reducers: ActionReducerMap<AppState> = {
  users: userdReducer,
};

// export const selectUser = (state: AppState) => state.weather.weatherData;

// export const selectError = (state: AppState) => state.location.error;

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? []
  : [];
