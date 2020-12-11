import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data:string;
  messageToInput="I'am Parent";
  // @Input() msgFromGrandParent:string;

  // getData(data)
  // {
  //   this.data=data;
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
