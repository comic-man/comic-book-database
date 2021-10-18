import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicBookInfoService {

  getApiResponse(name:string){
    return[
      {"name":1}
    ];
  }
}
