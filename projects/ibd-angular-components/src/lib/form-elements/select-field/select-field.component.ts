import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ibdc-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {

  @Input() objectItem;
  @Input() objectAtributteName;

  @Input() readOnlyVariable;
  @Input() selectableList;
  @Input() selectableListAtributteName;
  @Input() inputTitle;
  @Input() inputDescription;
  @Input() frontendSearchAttribute;

    fieldSelector= {
    class:'hide_field_selector',
  }

  constructor() { }

  ngOnInit(): void {
  }



  // toggle_field_selector_class(){
  //   this.fieldSelector.class =='show_field_selector'?this.fieldSelector.class ='hide_field_selector':this.fieldSelector.class ='show_field_selector'
  // }

  onSelectOption(option,focusElement:HTMLElement){
    this.objectItem[this.objectAtributteName] = option[this.selectableListAtributteName];
    this.closeSelect(focusElement);
  }

  closeSelect(focusElement){
    focusElement.blur();
  }

}