import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ibdc-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {
  //? Object parent, full, complete
  @Input() objectItem;
  //? Object Atributtes
  @Input() objectAtributteName;
  @Input() objectAtributteId;
  //? readOnlyVariable To show read only de field
  @Input() readOnlyVariable;
  //? List of items to select
  @Input() selectableList:[];
  //? Atributte name of full list items
  @Input() selectableListAtributteName;
  //? Atributte Id of full list items
  @Input() selectableListAtributteId;
  //? field texts
  @Input() inputTitle;
  @Input() inputDescription;
  //? filter items
  @Input() frontendSearchAttribute = '';

    fieldSelector= {
    class:'hide_field_selector',
  }

  ItemNameValue:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // toggle_field_selector_class(){
  //   this.fieldSelector.class =='show_field_selector'?this.fieldSelector.class ='hide_field_selector':this.fieldSelector.class ='show_field_selector'
  // }

  onSelectOption(option,focusElement:HTMLElement){
    this.objectItem[this.objectAtributteName] = option[this.selectableListAtributteName];
    console.log(this.objectItem[this.objectAtributteName] = option[this.selectableListAtributteName]);
    this.objectItem[this.objectAtributteId] = option[this.selectableListAtributteId];
    this.closeSelect(focusElement);
  }

  closeSelect(focusElement){
    focusElement.blur();
  }

  findItemName(){
    console.log(this.selectableList);
    return 'Buscando'
  }


  getItemNameValue(){

    if ( this.objectItem[this.objectAtributteName] ) {
      return this.objectItem[this.objectAtributteName];
    }else{
      if (!this.selectableList.length || !this.objectItem[this.objectAtributteId]) return;
      return this.selectableList.find(item=>item[this.selectableListAtributteId] == this.objectItem[this.objectAtributteId])[this.selectableListAtributteName];
    }

  }

}
