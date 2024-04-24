import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conditions1';
  name="Pasha";
  isAdmin=false;
  value!:string;
   fun()
   {
    if(this.isAdmin)
    {
      this.isAdmin=false;
    }
    else{
      this.isAdmin=true;
    }
   }
}
