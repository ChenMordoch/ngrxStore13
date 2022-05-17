import { AppState } from './reducers/index';
import { UsersService } from './users.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers, LoadUsersSuccess } from './action/users.actions';
import { User } from './models/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxStore';
  users: any | undefined;
  constructor(private usersService:UsersService,private store: Store<AppState>){}

showConfig() {
  this.usersService.getConfig()
    .subscribe((data: any) => {
      this.store.dispatch(LoadUsersSuccess({ data }));

    } );
}
// showConfig(){
//   // const user:User={}
//   this.store.dispatch(loadUsers());
// }
}
