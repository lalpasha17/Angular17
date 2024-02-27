import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 quotes:any[]=[];
  constructor()
  {
    fetch(`https://dummyjson.com/quotes`)
    .then((cnf)=>cnf.json())
    .then((data)=>{this.quotes=data.quotes})
  }
}
