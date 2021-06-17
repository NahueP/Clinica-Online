import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitular'
})
export class CapitularPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
