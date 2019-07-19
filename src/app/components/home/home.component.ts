import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private service: SpotifyService) { 
    this.loading = true;
    this.service.getNewReleases().subscribe((data: any) =>{
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }
  


  ngOnInit() {}

}
