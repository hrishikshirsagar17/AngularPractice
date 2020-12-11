import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

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
