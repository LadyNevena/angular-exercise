import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../users/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User;
  tableVisible: boolean;
  
  @Output() tableVisibleEvent = new EventEmitter<boolean>();
  @Output() newUserEvent = new EventEmitter<User>();
  @Input() userReceived: boolean;

 
  constructor() { }
  
  /* inform user-component to change tableVisible state */
  toggleTableVisible() {
    this.tableVisible=!this.tableVisible;
  	this.tableVisibleEvent.emit(this.tableVisible);
  }
  

  ngOnInit() {
    this.tableVisible=false;
    this.user = new User({
      id:0, name:"", username:"", email:"", address: {street:"", suit:"", city:"", zipocode:""},
      geo: {lat:"", lng:""}, phone:"", website:"", company: {name:"", catchPhrase:"", bs:""}});
  }
  
 
  /* inform user-component that new user is added */
  public onFormSubmit({form, value, valid }) {
    if (valid) {    
      this.newUserEvent.emit(new User({
      id: 0, name: value.name, username: value.username, email: value.email, 
      address: {street:value.address.street, suit:value.address.suit, city:value.address.city, zipocode:value.address.zipcode},
      geo: {lat:value.geo.lat, lng:value.geo.lng}, phone:value.phone, website:value.website, 
      company: {name:value.company.name, catchPhrase:value.company.catchPhrase, bs:value.company.bs}
      })); 
      form.reset();
    }
   }
}

