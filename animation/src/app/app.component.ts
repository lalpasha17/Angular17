import { Component } from '@angular/core';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  isDisabled=false

  Count:number=0;
  start:number=0;
  movies:any[]=[]
  constructor(private ms:AnimeService)
  {
    this.ms.getData().subscribe((data:any)=>this.movies=data)

  }
  show(){
    if(this.Count>=10)
      this.isDisabled=true
    else
    this.Count++;
  }
  incr()
  {
     
  }
  decr()
  {
      this.Count--;
  }
  reset()
  {
      this.start=0;
  }

 run()
 {
  if(this.start>=10)
     this.isDisabled=true
    else
    this.start++
 }
  
}
