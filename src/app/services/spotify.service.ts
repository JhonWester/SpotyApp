import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCmI_9wctxNjjXSaeykZobvY4N2jd_kQjEWz6GA1XIB_dUmdPbKlB58Dk4hDyB2_xXnEFtlM7EYWtUN4y4'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
}
