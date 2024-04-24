import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input2';
 info="Hello child this is Parent how r u?"
 parentperson={
  name:'Alice',
  age:25,
 };
}
