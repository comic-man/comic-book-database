import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ComicBookInfoService } from './comic-book-info.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

  const appRoutes: Routes = [
    { path:'New Releases', component: NewReleasesComponent },
    { path:'Catalog', component: CatalogComponent },
    { path:'Home', component: HomeComponent },
  ]


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CatalogComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ComicBookInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
