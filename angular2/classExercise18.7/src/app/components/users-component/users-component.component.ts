import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {UsersService} from '../../services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit {

    public users:User[];

  constructor(private userService:UsersService) { }

  ngOnInit() {

    let observable: Observable<User[]> = this.userService.getAllUsers();
        observable.subscribe((users) => { // Arrow Function (Lambda Expression)
            this.users = users;
            console.log(users)

        });
        
  }

}
