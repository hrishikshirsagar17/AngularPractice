import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(originalPrice: number, discountedPrice:number): number {
    
    return (originalPrice-(originalPrice*discountedPrice/100));
  }

}
