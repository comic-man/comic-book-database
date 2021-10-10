import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicBookInfoService {

  getApiResponse(argument){
    console.log(argument);
  }
}
