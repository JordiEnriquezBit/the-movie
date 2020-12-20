import { MovieDetailComponent } from './compoments/movie-detail/movie-detail.component';
import { MovieComponent } from './components/movie/movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"", redirectTo:"/home", pathMatch:'full'},
  {path:"movie",component:MovieComponent,
  children: [
    { path: ':id', component: MovieDetailComponent }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
