import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], forFiltering: string, filteringBy: string): any {
    if (value.length === 0 || forFiltering === '') {
      return value;
    }

    const filteredValues = [];
    for (let val of value) {
      if (val[filteringBy] === forFiltering) {
        filteredValues.push(val);
      }
    }
    return filteredValues;
  }
}
