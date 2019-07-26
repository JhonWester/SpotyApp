import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
})
export class TarjetasComponent implements OnInit {

  @Input() canciones: any[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showArtist(item: any){
    
    let element = "";
    if(item.type === "album"){
      element = item.artists[0].id;
    }
    if(item.type === "artist"){
      element = item.id;
    }

    this.router.navigate(['/artist', element]);
  }

}
