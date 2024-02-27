import { Component,ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  title='output Counter';
  c=0;
  @ViewChild(AppComponent) hc!: AppComponent;
  received() {
    this.c = this.hc.count;
  }
  val2!: string;
  receive(str: string) {
    console.log(str);
  }

}
