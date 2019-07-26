import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent implements OnInit {
  
  artist: any = {};
  topTracks: any = [];
  loading: boolean;

  constructor(private activedRoute: ActivatedRoute, private service: SpotifyService) { 
    this.activedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  ngOnInit() {
  }

  getArtist(id: string){
    this.loading = false;
    this.service.getArtist(id).subscribe(
      (response: any) => {
        this.artist = response;
        this.loading = true;
      }
    );
  }

  getTopTracks(id: string){
    
    this.service.getTopTracks(id).subscribe( response =>{
      this.topTracks = response;
      console.log(this.topTracks);
    })
  }

}
