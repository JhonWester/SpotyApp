import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  paises: any[] = [];

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(
     ( response: any) =>{
        this.paises = response;
        console.log(this.paises);
      }
    )
  }

}
