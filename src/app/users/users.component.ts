import { Component, OnInit } from '@angular/core';
import { UsersService } from  "./users.service";
import { User } from "./models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[];
  public searchString: string;
  
  constructor(private service: UsersService) { }
  
  fetchData() {
  	return this.service.getJSON().subscribe(data=>{
  									this.users=data as User[];
  			                      });
  }

  ngOnInit() {
  	this.fetchData();
  }

}
