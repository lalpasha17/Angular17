import { Component ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output () messageEvent=new EventEmitter<string>();
  sendMessage()
  {
    const message='Hello from the child component';
    this.messageEvent.emit(message);
  }

}
