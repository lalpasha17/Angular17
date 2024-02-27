import { Component,EventEmitter,ViewChild,Output} from '@angular/core';
import { HeaderComponent } from './header/header.component';
EventEmitter
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'outputCounter';
  @Output() prasad=new EventEmitter();
  c = 0;
  count=0;
  value2!:any;
  @ViewChild(HeaderComponent) hc!: HeaderComponent;
  received() {
    this.c = this.hc.count;
  }
  val!: string;
  receive(str: string) {
    console.log(str);
  }
  submit()
  {
         this.prasad.emit(this.value2)
  }
  incr() { this.count++; }
  decr() { this.count--; }
  reset() {
    this.count =0;
  }
}
