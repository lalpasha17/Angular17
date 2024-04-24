import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  id:any;
  product:any;
  constructor(private route:ActivatedRoute,private ts:DataService)
  {
    this.route.params.subscribe((data)=>{
      this.id =data[ 'id'];
      this.ts.get(this.id).subscribe((data:any)=>this.product=data)
    })
  }

}
