import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NewReleasesComponent } from './home/new-releases/new-releases.component';


const routes: Routes = [
  {path:'catalog', component: CatalogComponent},
  {path:'new-releases', component: NewReleasesComponent},
  {path:'home', component:HomeComponent},
  {path:'about-us', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = []
