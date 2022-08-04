import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  @Input() name : string = ''
  @Input() img : string = ''
  @Input() days : number = 0
  @Input() price1 : number = 0
  @Input() price2 : number = 0
  @Input() price3 : number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
