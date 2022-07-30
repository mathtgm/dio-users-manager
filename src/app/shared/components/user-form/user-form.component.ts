import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/private/services/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  users: Array<User> = [];
  userID: any;

  constructor(private fb: FormBuilder, private userService: UserService, private actRouter: ActivatedRoute, private router: Router) { 
    this.userForm = this.fb.group({
      id: 0,
      name: '',
      lastName: '',
      age: 0,
      email: '',
      password: '',
      user: ''
    });
  }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(params => {
      this.userID = params.get('id');
      if(this.userID !== null) {
          this.userService.getUser(this.userID).subscribe(result => {
            this.userForm.patchValue({
              id: result[0].id,
              name: result[0].name,
              lastName: result[0].lastName,
              age: result[0].age,
              email: result[0].email,
              password: result[0].password,
              user: result[0].user
            })
          })
      }
    })
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getListUsers().subscribe(result => {
      this.users = result;
    })
  }

  createUser(): void {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userService.postUser(this.userForm.value).subscribe(result => {
      console.log(`Usuario cadastrado com sucesso: `);
    }, (err) => {console.log(err)}, () => {
      this.router.navigate(['/']);
    })
  }

  updateUser(): void {
    this.userService.updateUser(this.userForm.value).subscribe(result => {
      alert('User updated')
    }, (err) => {console.log(err)}, () => {
      this.router.navigate(['/']);
    })
  }

  actionButton(): void {
    if(this.userID !== null) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

}
