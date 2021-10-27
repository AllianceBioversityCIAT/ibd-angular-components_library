import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAlphabetically'
})
export class SortAlphabeticallyPipe implements PipeTransform {

  transform(Fulllist: [], sortBy:string): unknown {
    if (sortBy) {
      let list = Fulllist;
      list.sort(function (a, b) {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy]> b[sortBy]) {
          return 1;
        }
        return 0;
      });
      return list;
    }else{
      return Fulllist
    }

  }


}
