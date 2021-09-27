import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { selectNgModelOptions } from '../../models/select-ngmodel-options.interface';

@Component({
  selector: 'ibdc-select-ngmodel',
  templateUrl: './select-ngmodel.component.html',
  styleUrls: ['./select-ngmodel.component.scss']
})
export class SelectNgmodelComponent implements OnInit {

  searchText = '';
  @Input() options:selectNgModelOptions;
  
  selectInput:FormControl;

  fieldSelector= {
    class:'hide_field_selector',
    value:'244242424',
    name:''
  }

  beforeOption:any = null;


  // valors='asasasas';


 
  constructor() { }

  ngOnInit(): void {
    // console.log(this.options.selectList);
    this.searchText = this.options.initialSearchText?this.options.initialSearchText:this.searchText;
    this.findAndChangeFieldSelectorName();
  }

  findAndChangeFieldSelectorName(){
    // console.log("_______________________________");
    // console.log(this.options.inputTitle);
    // console.log(this.options.selectList);
    // console.log(this.options.item[this.options.itemId]);
    if (this.options.item[this.options.itemId]) {
      let itemFinded:any =  this.options?.selectList.find((resp:any) =>resp[this.options.itemId].toString() == this.options.item[this.options.itemId]);
      itemFinded.selected = true;
      this.fieldSelector.name =itemFinded[this.options.itemName];
      this.beforeOption = itemFinded;
    }
  }

  writtenInSearchField(){
    // console.log("writtenInSearchField");
    // this.mapSelected();
  }

  toggle_field_selector_class(){
    this.fieldSelector.class =='show_field_selector'?this.fieldSelector.class ='hide_field_selector':this.fieldSelector.class ='show_field_selector'
  }

  onSelectOption(option){
    if (this.beforeOption && (option[this.options.itemId] != this.options.item[this.options.itemId])) this.beforeOption.selected = false;
    


    if (this.options?.itemName)this.options.item[this.options.itemName] = option[this.options.itemName];
    this.options.item[this.options.itemId] = option[this.options.itemId];
    this.fieldSelector.name = option[this.options.itemName];


    option.selected = !option.selected;
    this.beforeOption = option;
    if (!option.selected) {
     this.options.item[this.options.itemId] = null;
     this.fieldSelector.name = ""; 
     this.beforeOption = null;
    }
    
    console.log(this.beforeOption);
  }

  validateColor(option){
    if (option[this.options.itemId] == this.options.item[this.options.itemId]) {
      return 'option_selectedWithAccess';
    }
    if (option.selected) {
      return 'option_selected';
    }
//     option_unselected

// option_selectedWithAccess
  }

  validateBlockOption(option){
    if ((option[this.options.itemId] == this.options.item[this.options.itemId])) {
      return false;
    }
    if (option.selected == true) {
      return true;
    }


  }

}
