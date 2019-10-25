import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
{
	path: "", component:HomePageComponent
},
{
	path:"blog-page", component:BlogPageComponent
},
{
	path:"travel", component:TravelComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
