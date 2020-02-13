import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class SqrtPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
  console.log("TCL: SqrtPipe -> ...args", args)
    return value - (value)*(+args/100); 
  }
}
