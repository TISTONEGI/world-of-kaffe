import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string): any[] {
    if (!value || !filterString) {
      return value;
    }
    return value.filter(item => 
      item.name.toLowerCase().includes(filterString.toLowerCase()) // Exemplo de filtro
    );
  }
}
