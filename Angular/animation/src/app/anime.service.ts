import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private asd:HttpClient) { }
  getData()
  {
    return this.asd.get('https://api.sampleapis.com/movies/animation');
  }

}
