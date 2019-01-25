import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNumber'
})
export class ReplacePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let numero = value.replace(/[^\d]+/g,'');

    return numero;
  }

}
