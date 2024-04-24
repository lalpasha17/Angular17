import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private lp:HttpClient) { }
  getData()
  {
    return this.lp.get(`http://localhost:3000/books`);
  }
  get(id:any)
  {
    return this.lp.get(`http://localhost:3000/books/${id}`);
  }


}
