import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularEx2';
  services : Service[] = []
  guides : Guide[] = []
  trips : Trip[] = []
  constructor(private http : HttpClient){}
  ngOnInit(){
    this.GetServices()
    this.GetGuides()
    this.GetTrips()
  }
  GetServices()
  {
    this.http.get('http://localhost:3000/GetServices').subscribe((json : any) =>{
      json.forEach((e : any) => {
        var s = new Service()
        s.title = e.A
        s.description = e.B
        s.icon = e.C
        this.services.push(s)
      });
    })
  }
  GetGuides()
  {
    this.http.get('http://localhost:3000/GetGuides').subscribe((json : any) =>{
      json.forEach((e : any) => {
        var s = new Guide()
        s.name = e.A
        s.desc = e.B
        s.img = e.D
        s.price = e.C
        this.guides.push(s)
      });
    })
  }
  GetTrips()
  {
    this.http.get('http://localhost:3000/GetTrips').subscribe((json : any) =>{
      json.forEach((e : any) => {
        var s = new Trip()
        s.name = e.A
        s.desc = e.C
        s.img = e.B
        s.price1 = e.D
        s.price2 = e.E
        s.price3 = e.F
        s.days = e.G
        s.cont = e.H
        this.trips.push(s)
      });
    })
  }
}
export class Service
{
  title : string = ''
  description : string = ''
  icon : string = ''
}
export class Guide
{
  name : string = ''
  desc : string = ''
  img : string = ''
  price : number = 0
}
export class Trip
{
  name : string = ''
  desc : string = ''
  img : string = ''
  price1 : number = 0
  price2 : number = 0
  price3 : number = 0
  days : number = 0
  cont : string = ""
}