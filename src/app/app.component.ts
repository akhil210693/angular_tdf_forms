import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics=["angular","react","vue","JQuery"];
  topicHasError=true;
  
  model= new User('Akhil','8008761684','akhil210693@gmail.com','');
  reset(){
    this.model=new User('','','','');
  }
  validatetopic(value: string){
    if(value ==="default"){
      this.topicHasError=true; 
    }
    else{
      this.topicHasError=false;
    }
  }
  onsubmit(){
    
    console.log("Name: "+ this.model.name);
    console.log("Phone Number: "+ this.model.phone);
    console.log("Email: "+ this.model.email);
    console.log("Topic: "+ this.model.topic);
    this.model=new User('','','','');
  }
}
