import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(value: string | null): string {
    if (value) {
      return value[0].toUpperCase() + value.slice(1);
    }
    return '';
  }

}
