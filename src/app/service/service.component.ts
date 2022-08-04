import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  @Input() title : string=''
  @Input() description : string=''
  @Input() icon : string=''
  constructor() { }

  ngOnInit(): void {
  }
}
