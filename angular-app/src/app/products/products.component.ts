import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[];
  searchName: string;
  flag:boolean;
  flag1:boolean;
  msg:string="";

  @Input() m:string;

  constructor() {
    this.products = [
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

  temp: any;
  getValue(e:any) {
    this.temp = e.target.value;
  }

  temparr: any[] = [];
  getProductByName() 
  {
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
      
    }
    
  }

  

  ngOnInit(): void
  {
    // this.temparr = this.products;
  }

}
