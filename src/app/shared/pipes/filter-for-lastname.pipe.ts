import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterForLastname'
})
export class FilterForLastnamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
