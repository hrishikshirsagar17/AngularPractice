import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  msgForOutput:string="I'am Child";

  @Input() mymsg:string;

  // @Output() emt=new EventEmitter();


  // sendMsg()
  // {
  //   this.emt.emit(this.msgForOutput);
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
