import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  @Input() name : string = ''
  @Input() desc : string = ''
  @Input() img : string = ''
  @Input() cont : string = ''
  @Input() price1 : number = 0
  @Input() price2 : number = 0
  @Input() price3 : number = 0
  @Input() days : number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
