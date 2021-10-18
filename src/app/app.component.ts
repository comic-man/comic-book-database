import { Component } from '@angular/core';
import { ComicBookInfoService } from './Services/comic-book-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comic-book-database';

  constructor(){
    let svc = new ComicBookInfoService();
    svc.getApiResponse
  }
}
