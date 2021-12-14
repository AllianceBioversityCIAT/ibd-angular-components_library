import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ibdcFormatCurrency]'
})
export class FormatCurrencyDirective implements OnInit {

  constructor(
    private _elementRef:ElementRef
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let input =  this._elementRef.nativeElement;
    input.oninput = ()=>{this.formatCurrency(input)};;
    console.log(input)
  }

  formatCurrency(input) {
    var input_val = input.value;
    console.log(input_val)
    console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(input_val));
  }



    

}

