import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coffeeName'
})
export class CoffeeNamePipe implements PipeTransform {
  transform(value: string): string {
    return `☕ ${value}`;
  }
}
