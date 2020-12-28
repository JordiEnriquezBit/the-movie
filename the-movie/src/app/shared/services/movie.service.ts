import { Movie } from './../model/movie/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  *  as  data  from  '../../../assets/movies.json';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  _jsonURL = '../data/movies.json';
  movies=data["default"].movies;
  constructor(private httpClient: HttpClient) {}
  async getMovies(){
    return this.movies;
  }

  async getMovie(id:Number){
      await this.getMovies();
      let movie = this.movies.find(data => data.id == id);
      return movie;
   }

}
