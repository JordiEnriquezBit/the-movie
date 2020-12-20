import { Movie } from './../../shared/model/movie/movie';
import { MovieService } from './../../shared/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies:Movie[];
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies().then(data=>{
      this.movies=data
      console.log(this.movies)
      this.movieService.getMovie(2)

    });
  }

}
