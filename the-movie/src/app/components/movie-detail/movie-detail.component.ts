import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/model/movie/movie';
import { NavigationEnd, Router, ActivatedRoute, Params } from '@angular/router';
import { takeUntil, filter } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit,OnDestroy {
  private destroy$: Subject<void> = new Subject();

  movie:Movie;

  constructor(private router: Router,private routes: ActivatedRoute,private movieServices:MovieService) {
  this.router.events.pipe(
    takeUntil(this.destroy$),
    // If it is a NavigationEnd event re-init the component
    filter(e => e instanceof NavigationEnd)
  ).subscribe((e: any) => {
    this.refresh();
});
}
  refresh() {
    this.routes.params.subscribe(
      (params: Params) => {
        let data = {...params}
        this.movieServices.getMovie(data["id"]).then(data=>this.movie = data);
        /* this.src = params.avatar; */
      }
    )
    // Set default values and re-fetch any data you need.
  }

  ngOnInit(): void {
    console.log("dasdsa");
    this.refresh();
  }

  ngOnDestroy() {
    console.log(this.destroy$)
    // emit a value which will unsubscribe from all observables.
    this.destroy$.next();
  }
}
