import { NavigationEnd, Router, ActivatedRoute, Params } from '@angular/router';
import { takeUntil, filter } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject();

  constructor(private router: Router,private routes: ActivatedRoute) {

  }
  refresh() {
    this.routes.params.subscribe(
      (params: Params) => {
        let data = {...params}
        console.log(data)
        /* this.src = params.avatar; */
      }
    )
    // Set default values and re-fetch any data you need.
  }

  ngOnInit(): void {
    console.log("dasdsa");
    this.router.events.pipe().subscribe((e: any) => {
      this.refresh();
  });
  }
  ngOnDestroy() {
    // emit a value which will unsubscribe from all observables.
    this.destroy$.next();
  }

}
