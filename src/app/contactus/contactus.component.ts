import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
// @Input() name :string=''
// @Input() email :string=''
// @Input() phone :string=''
// @Input() trip :string=''
// @Input() msg :string=''
// @Input() persons : number = 0
grp : Group = new Group()
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  Contact()
  {
    // console.log(this.grp)
    this.http.post<any>('https://travelapi04082022.herokuapp.com/Contact' , this.grp).subscribe(data => {
    })
  }
}
class Group
{
  name : string = ''
  email : string = ''
  phone : string = ''
  trip : string = ''
  nb : number = 0
  guide : string = ''
  msg : string = ''
}