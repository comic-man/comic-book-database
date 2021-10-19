import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewReleasesComponent } from './home/new-releases/new-releases.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ComicBookInfoService } from './Services/comic-book-info.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './home/about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CatalogComponent,
    NavigationComponent,
    HomeComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ComicBookInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
