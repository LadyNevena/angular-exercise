import { Component, OnInit } from '@angular/core';
import { UsersService } from  "./users.service";
import { User } from "./models/user.model";
import { FormComponent } from "../form/form.component"
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users : User[];
  public searchString: string;
  public visible: boolean;
  public user: User;
 
  toggleVisible() {
  	this.visible = !this.visible;
  }
  
  constructor(private service: UsersService) { }
  
  fetchData() {
  	return this.service.getJSON().subscribe(data=>{
  									this.users=data as User[];
  			                      });
  }

  ngOnInit() {
  	this.fetchData();
  	this.visible = true;
  }
  
  /* get table visible from event */
  getTableVisible($event) {
  	this.visible=$event;
  }
  
  /* get new user from event */
  getNewUser($event) {
   	this.user = $event;
    this.users.unshift(this.user);  
  }
}
