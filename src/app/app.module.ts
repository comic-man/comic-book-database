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
import { LoginInComponent } from './navigation/login-in/login-in.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CatalogComponent,
    NavigationComponent,
    HomeComponent,
    AboutUsComponent,
    LoginInComponent,
    NewReleasesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,

  ],
  providers: [
    ComicBookInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
