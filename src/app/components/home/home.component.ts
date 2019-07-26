import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  error = false;
  loading: boolean;
  mensaje: string;

  constructor(private service: SpotifyService) { 
    this.loading = true;
    this.service.getNewReleases().subscribe((data: any) =>{
      this.nuevasCanciones = data;
      this.loading = false;
    }, (error) => {
        this.mensaje = error.error.error.message;
        this.error = true;
        this.loading = false;
    });
  }
  


  ngOnInit() {}

}
