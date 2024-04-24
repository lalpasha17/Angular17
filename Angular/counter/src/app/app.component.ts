import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter';
  isDisabled=false;
  evenFlag=true;
  isEven="Even";
  count:number=0;
  checkEvenOdd()
  {
    if(this.count%2==1){this.isEven="odd"; this.evenFlag=false;}
    else{this.isEven="Even";this.evenFlag=true}
  }
  incr()
  {
    if(this.count>20)
    {
      this.isDisabled=true
    }
    else
    {
      this.count++;
    }
     this.checkEvenOdd() 
  }
  decr()
  {
    this.count--;
    this.checkEvenOdd() ;
  }
  Reset()
  {
    this.count=0;
  }
  }
  
  

