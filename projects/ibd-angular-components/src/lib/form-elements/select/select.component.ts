import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { selectOptions } from '../../models/select-options.interface';

@Component({
  selector: 'ibdc-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  searchText = '';
  oneDate = false;
  @Input() options:selectOptions;
  
  selectInput:FormControl;
  selectList=[];

  fieldSelector= {
    class:'hide_field_selector',
    value:'244242424',
    name:''
  }


  // valors='asasasas';


 
  constructor() { }

  ngOnInit(): void {
    // console.log(this.options);
    this.searchText = this.options.initialSearchText?this.options.initialSearchText:this.searchText;
    this.consumeService();
    this.selectInput = new FormControl(this.options.form.value[this.options.formControlId], [
      Validators.required,
    ]);
     this.setValue(null);
  
  }

  validateIfIsOnlyOneDateToSelect(){
    console.log("validateIfIsOnlyOneDateToSelect");
    console.log(this.selectList);
    console.log(this.selectList.length);
    if (this.selectList.length == 1) {
      this.oneDate = true;
      this.fieldSelector.name = this.selectList[0][this.options.selectItemName];
      this.options.form.controls[this.options.formControlId].setValue(this.selectList[0][this.options.selectItemId]);
      if (this.options.formControlName) {
        this.options.form.controls[this.options.formControlName].setValue(this.selectList[0][this.options.selectItemName]);
      }
    }
  }

  findAndChangeFieldSelectorName(){
    // console.log(this.options.inputTitle);
    // console.log(this.selectList);
    if (this.options.form.value[this.options.formControlId]) {
      this.fieldSelector.name = this.selectList.find(resp =>resp[this.options.selectItemId].toString() == this.options.form.value[this.options.formControlId])[this.options.selectItemName];
    }
  }

  setValue(event){
    if (event && this.options.formControlName) {
      this.options.form.controls[this.options.formControlName].setValue(event.source.triggerValue);
    }

    this.options.form.controls[this.options.formControlId].setValue(this.selectInput.value);
  }  



  disableOption(option){
    if ( this.options.toDisableList) {
      for (const code of this.options.toDisableList) {
        
        if (option[this.options.selectItemId]==code[this.options.selectItemId]) {
          return true;
        }
      }
    }else{
      return false;
    }
  }

  // height:string;

  consumeService() {
    if (this.options.service && !this.options.selectList) {

      this.options.service.serviceTS[this.options.service.functionName](this.options.service.functionfirstParam).subscribe((res) => {
        this.selectList = res;
        // console.log(res);
        // each key and sub keys to find the list
        if (this.options.service.objectName) this.options.service.objectName.map((objectName)=>this.selectList = this.selectList[objectName]);
        if (this.options.form.value[this.options.formControlId]) {
          this.findAndChangeFieldSelectorName()
        }
        
        // if (this.selectList.length < 4) {
        //   this.height = (this.selectList.length * 50) + 'px';
        // } else {
        //   this.height = '200px'
        // }
        this.validateIfIsOnlyOneDateToSelect();
      });
      
    }else{
      this.selectList = this.options.selectList;
      this.findAndChangeFieldSelectorName();
      this.validateIfIsOnlyOneDateToSelect();
    }
  }

  writtenInSearchField(){
    console.log("writtenInSearchField");
    // this.mapSelected();
  }

  toggle_field_selector_class(){
    this.fieldSelector.class =='show_field_selector'?this.fieldSelector.class ='hide_field_selector':this.fieldSelector.class ='show_field_selector'
  }

  onSelectOption(option){
    // console.log(option[this.options.selectItemName]+' - '+option[this.options.selectItemId]);
    if (this.options?.formControlName)this.options.form.controls[this.options.formControlName].setValue(option[this.options.selectItemName]);
    this.options.form.controls[this.options.formControlId].setValue(option[this.options.selectItemId]);
    // this.selectInput.setValue(data[this.options.formControlName]);
    this.fieldSelector.name = option[this.options.selectItemName];

  }

}
