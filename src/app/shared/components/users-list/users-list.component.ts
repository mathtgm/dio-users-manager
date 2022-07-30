import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/private/services/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  userTotal: number = 0;
  userList: Array<User> = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers(): void {
    this.userService.getListUsers().subscribe(resultAPI => {
      this.userTotal = resultAPI.length;
      this.userList = resultAPI;
    })
  }

  deleteUser(idUser: number) {
    this.userService.deleteUser(idUser).subscribe(result => {
      alert('User successfully deleted');
    }, (err) => console.log(err), () => this.getListUsers());
  }

}
