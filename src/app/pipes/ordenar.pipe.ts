import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(array: any, field: string): any[] 
  {
    console.log(field);
    if (!Array.isArray(array)) 
    {
      return;
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) { 
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
