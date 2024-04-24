import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
@Input() img!:any;
@Input() title!:any;
}
