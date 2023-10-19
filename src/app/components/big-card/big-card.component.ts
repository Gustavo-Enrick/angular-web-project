import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:String = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescrption:String = ""
  @Input()
  Id:String = "0"

  constructor(){ }

  ngOnInit():void{

  }
}
