import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortening'
})
export class ShorteningPipe implements PipeTransform {

  transform(value: any, restriction: number): any {
    if (value.length > restriction) {
      return value.substr(0, restriction) + ' ...';
    }
    return value;
  }

}
