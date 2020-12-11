import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(prod: any[], searchText: string): any[] {
    console.log("in filter"+prod);
  if(!prod) return [];
  if(!searchText) return prod;
  searchText=searchText.toLowerCase();
  return prod.filter( it => {
    return it.pname.toLowerCase().includes(searchText);
  });
 }

}
