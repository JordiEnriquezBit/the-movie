import { MovieService } from './../../shared/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getJSON();
  }

}
