import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAndReplaceAsStrong'
})
export class SearchAndReplaceAsStrongPipe implements PipeTransform {

  transform(value: string, text): unknown {
    let indexOfText = value.toLowerCase().indexOf(text.toLowerCase());
    let substringValue = value.substring(indexOfText,indexOfText + text?.length)
    console.log(substringValue)
    return value.replace(substringValue,`<strong class="textFinded">${substringValue}</strong>`);
  }

}
