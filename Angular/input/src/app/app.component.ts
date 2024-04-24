import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input';
  img1="https://th.bing.com/th?id=OIP.CFcr77um4CHi5D2z-M87ygHaLL&w=203&h=307&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
  title1='Book1';
  img2="https://th.bing.com/th?id=OIP.WQrNqhnmCAQSnxef15eveQHaLQ&w=202&h=308&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
  title2='Book2';
  c=0;
  incr()
  {
    this.c++;
  }
}
