import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectFilter'
})
export class SelectFilterPipe implements PipeTransform {

  transform(list:any,word:string,attributeName:string): any {
    console.log("transform");
    const array = [];
    if (word == '' || !attributeName ) {
      return list;
    }
    if (list) {
      for (const region of list) {
        if (region[attributeName].toUpperCase().indexOf(word?.toUpperCase())>-1) {
          array.push(region);
        }
        
      } 
    }

    return array;
  }

}
