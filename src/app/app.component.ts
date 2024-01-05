import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeAngular';
   name:string="";
   salary:number=0
   date:string=""
   miles:number=0

   handleInput(event:any){
    this.name=event.target.value;
   }

   handleDate(event:any){
    this.date=event.target.value;
   }

   handleAmount(event:any){
   let  v=event.target.value;
    if(isNaN(parseFloat(v))){
      this.salary=0;
      return;
    }
    this.salary=parseFloat(event.target.value);
   }

   handleMiles(event:any){
    let  v=event.target.value;
    if(isNaN(parseFloat(v))){
      this.miles=0;
      return;
    }
    this.miles=parseFloat(event.target.value);
   }
}
