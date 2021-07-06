import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectFilter'
})
export class SelectFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
