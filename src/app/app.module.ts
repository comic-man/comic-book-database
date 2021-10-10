import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ComicBookInfoService } from './comic-book-info.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NewReleasesComponent,
    CatalogComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ComicBookInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
