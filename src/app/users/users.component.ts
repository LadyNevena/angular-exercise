import { Component, OnInit } from '@angular/core';
import { JsonUsersService } from  "../json-users.service";
import { User } from "../user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[];

  constructor(private service: JsonUsersService) { }

  ngOnInit() {
  	this.service.getJSON()
      	.subscribe(data=>{
            this.users=data as User[];
            console.log(this.users);
        });
  }

}
