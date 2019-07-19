import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery(query: string){
    const url = 'https://api.spotify.com/v1/'+query;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBBZjSmsv5mRHsCSQT38wWyX4D_zoFfnRE47XmGf_AyTwK4o9YihJqcP39fEvpA5r-6kn_iuhuB0y-xKn4'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20').pipe(
      map(data => data['albums'].items));
  }

  getArtist(termino: string){

    return this.getQuery('search?query='+termino+'&type=artist&market=CO&offset=0&limit=15').pipe(
      map(data => data['artists'].items));
  }
}
