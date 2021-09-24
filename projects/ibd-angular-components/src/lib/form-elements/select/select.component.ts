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
    this.searchText = this.options.initialSearchText?this.options.initialSearchText:this.searchText;
    this.consumeService();
    this.selectInput = new FormControl(this.options.form.value[this.options.formControlId], [
      Validators.required,
    ]);
     this.setValue(null);
  
  }

  validateIfIsOnlyOneDateToSelect(){
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
    // if (this.options.inputTitle== "Choose a depth scale") {
    //   console.log("_______________________________");
    //   console.log(this.options);
    //   console.log(this.options.inputTitle);
    //   // console.log(this.options.selectList);
    //   console.log(this.selectList);
    //   console.log(this.options.form.value[this.options.formControlId]);
    //   console.log(this.options.form.value);
    // // }
    // console.log(this.options.form.value[this.options.formControlId]);
    // console.log(this.options.formControlId);
    if (this.options.form.value[this.options.formControlId]) {
      this.fieldSelector.name = this.selectList?.find(resp =>resp[this.options.selectItemId].toString() == this.options.form.value[this.options.formControlId]);
      if (this.fieldSelector.name) {
        this.fieldSelector.name = this.fieldSelector.name[this.options.selectItemName]
      }else{
        this.fieldSelector.name = '';
      }
      // this.fieldSelector.name = this.fieldSelector.name[this.options.selectItemName]
      // console.log(this.fieldSelector.name);
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
        // each key and sub keys to find the list
        if (this.options.service.objectName) this.options.service.objectName.map((objectName)=>this.selectList = this.selectList[objectName]);
        this.findAndChangeFieldSelectorName()
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
    // this.mapSelected();
  }

  toggle_field_selector_class(){
    this.fieldSelector.class =='show_field_selector'?this.fieldSelector.class ='hide_field_selector':this.fieldSelector.class ='show_field_selector'
  }

  onSelectOption(option){
    if (this.options?.formControlName)this.options.form.controls[this.options.formControlName].setValue(option[this.options.selectItemName]);
    this.options.form.controls[this.options.formControlId].setValue(option[this.options.selectItemId]);
    this.fieldSelector.name = option[this.options.selectItemName];

  }

}
