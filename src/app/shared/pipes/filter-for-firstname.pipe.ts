import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterForFirstname'
})
export class FilterForFirstnamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
