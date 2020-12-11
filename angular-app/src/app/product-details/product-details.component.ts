import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Output() p:EventEmitter<boolean>=new EventEmitter<boolean>();

  
  products:any[];

  constructor() {
    this.products=[
      {
        pid: 101,
        pname: 'Mobile',
        price: 25000,
        discount: 10,
      },
      {
        pid: 102,
        pname: 'Laptop',
        price: 50000,
        discount: 15,
      },
      {
        pid: 103,
        pname: 'Television',
        price: 40000,
        discount: 10,
      },
      {
        pid: 104,
        pname: 'Headphone',
        price: 2000,
        discount: 20,
      },
    ]
   }

   flag:boolean;
   flag1:boolean;
   @Input() flag2:boolean;
   name:string="";
   msg:string="";
   temp: any;//Mobile

  getValue(e:any) {
    this.temp = e.target.value;
  }

   temparr: any[] = [];

  getProductByName() 
  {
    this.flag=true;
    this.temparr=[];
    if (this.temp =='' || this.temp==null) 
    {
      this.temparr=[];
      this.temparr = this.products;
    }
    else 
    {
      for (let i = 0; i < this.products.length; i++) 
      {
        if (this.products[i].pname == this.temp) 
        {
          this.flag=true;
          this.flag1=true;
          this.temparr.push(this.products[i]);
          console.log(this.flag);
          break;
        }
        else
        {
          this.flag=false;
          this.flag1=true;
          console.log(this.flag);
        }
        
      }

      if(this.flag==true)
      {
        this.p.emit(this.flag);
      }

      else
      {
        this.p.emit(this.flag);
      }
      
    }
    
  }
}
