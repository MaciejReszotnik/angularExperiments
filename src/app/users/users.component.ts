import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userName = '';

  constructor() { }

  ngOnInit(): void {
  }

  public isNamefieldEmpty(): boolean {
    if (this.userName === '') {
      return true;
    }
    return false;
  }

  public onUsernameReset(): void {
    this.userName = '';
  }

}
