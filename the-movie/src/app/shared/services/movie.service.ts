import { Movie } from './../model/movie/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  _jsonURL = '../data/movies.json';
  movies:Movie[]=[];
  constructor(private httpClient: HttpClient) {}
  async getMovies(){
   await this.httpClient.get("../../../assets/movies.json").toPromise().then(data =>{
      this.movies = data["movies"] as Movie[]
    });
    return this.movies;
  }

  async getMovie(id:Number){
      await this.getMovies();
      let movie = this.movies.find(data => data.id == id);
      return movie;
   }

}
