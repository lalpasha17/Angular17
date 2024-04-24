import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  constructor(private ls:HttpClient) { }
  getData()
  {
    return this.ls.get('http://localhost:3000/books');
  }
  deleteData(id:number)
  {
    return this.ls.delete(`http://localhost:3000/books/${id}`);
  }
  postData(data:any)
  {
     return this.ls.post(`http://localhost:3000/books`,data);
  }
  putData(data:any,id:number)
  {
    return this.ls.put(`http://localhost:3000/books/${id}`,data)
  }
}
