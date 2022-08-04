import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {
  @Input() name : string = ''
  @Input() desc : string = ''
  @Input() img : string = ''
  @Input() price : number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
