import { Movie } from './../model/movie/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
    _jsonURL = '../data/movies.json';
    movies:Movie[]=[];

    public getJSON(){
      let json =  this.http.get(this._jsonURL);
      json.subscribe(data=>{
        console.log(data);
      });


    }
  getMovies(): Observable<any>{
    return  this.http.get(this._jsonURL)
  }
}
