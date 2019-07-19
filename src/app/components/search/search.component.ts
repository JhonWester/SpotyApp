import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  
  artista: any[] = [];
  loading: boolean;

  constructor(private service: SpotifyService) { }

  ngOnInit() {
  }

  buscar(busqueda: string){
    this.loading = true;
    this.service.getArtist(busqueda).subscribe((data : any) => {
      this.artista = data;
      this.loading = false;
    })
  }

}
