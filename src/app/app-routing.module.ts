import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';


const routes: Routes = [
  {path:'catalog', component: CatalogComponent},
  {path:'new releases', component: NewReleasesComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = []
