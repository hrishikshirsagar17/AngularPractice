import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.css']
})
export class AddParentComponent {

  msg:string;
  flag:boolean;
  flag1:boolean;
 
  onNotify(flag:boolean):void
  {
    this.flag=true;
    if(this.flag==flag)
    {
      this.flag1=true;
      console.log(this.flag);
    }
    else
    {
      this.flag=false;
      this.flag1=true;
      console.log(this.flag);
    }
    
  }

}
