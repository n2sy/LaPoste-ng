import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
})
export class ShortPipe implements PipeTransform {
  transform(value: string, maxlongueur: number) {
    if (value.length >= maxlongueur) return value.slice(0, maxlongueur) + '...';
    else return value;
  }
}
