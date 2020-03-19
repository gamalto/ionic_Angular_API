import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';


export enum searchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

 url = 'http://www.omdbapi.com/';
 apikey = '';

  constructor(private httpClient: HttpClient) { }

  getallData(): Observable<any> {
    return this.httpClient.get(this.url + '' + this.apikey)
  }

  searchData(title:string, type:searchType): Observable<any> 
  {
   
    return this.httpClient.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apikey}`)
      .pipe(
        map(results => {

          console.log("RAW: " + results);
          return results['Search'];
        })
      );
    }
    getDetail(id:any)
    {
      return this.httpClient.get(`${this.url}?i=${id}&plot=full&apikey=${this.apikey}`)
    }

}
