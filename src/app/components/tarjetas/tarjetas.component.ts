import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
})
export class TarjetasComponent implements OnInit {

  @Input() canciones: any[];

  constructor() { }

  ngOnInit() {
  }

}
