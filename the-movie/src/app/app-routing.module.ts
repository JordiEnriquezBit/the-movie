import { HomeComponent } from './../../../../member-management/src/app/global/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"", redirectTo:"/home", pathMatch:'full'},
  {path:"movie",component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
