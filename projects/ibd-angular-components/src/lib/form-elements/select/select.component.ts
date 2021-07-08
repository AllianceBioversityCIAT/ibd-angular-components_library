import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { selectOptions } from '../../models/select-options.interface';


@Component({
  selector: 'ibdc-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  searchText = '';
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
    this.consumeService((useService)=>this.findAndChangeFieldSelectorName(useService));
    this.selectInput = new FormControl(this.options.form.value[this.options.formControlId], [
      Validators.required,
    ]);
     this.setValue(null);
     if(this.options.readOnlyVariable){
       this.getSelectResult();
     }
  }

  findAndChangeFieldSelectorName(useService){
    console.log(useService);
    this.fieldSelector.name = this.options.form.value[this.options.formControlName];
    console.log(this.options.form.value[this.options.formControlId]);
    if (useService) {
    // this.fieldSelector.name = this.selectList.find(resp =>resp[this.options.selectItemId].toString() == this.options.form.value[this.options.formControlId])[this.options.selectItemName];

    }else{
      // this.fieldSelector.name = this.options.selectList.find((resp:any) => resp[this.options.selectItemId].toString() == this.options.form.value[this.options.formControlId])[this.options.selectItemName];
    }
  }

  setValue(event: MatSelectChange){
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

  getSelectResult(){
    for (const item of this.options.selectList) {
      if (item[this.options.selectItemId] == this.selectInput.value) {
        return item[this.options.selectItemName];
      }

    }
  }


  removeFocus =false;
  removeFocusSelect(){
    this.removeFocus = true;
    setTimeout(() => {
      this.removeFocus = false
    }, 1);
  }

  addOption(data){
    // console.log('%cOption','background: #222; color: #37ff73');
    // console.log(data);
    // console.log(data[this.options.selectItemName]);
    if (this.options?.formControlName)this.options.form.controls[this.options.formControlName].setValue(data[this.options.selectItemName]);
    this.options.form.controls[this.options.formControlId].setValue(data[this.options.selectItemId]);
    this.selectInput.setValue(data[this.options.formControlName]);
    // console.log('%cForm','background: #222; color: #fd8484');
    // console.log(this.options.form.value);
  }

  height:string;

  consumeService(callback?) {
    if (this.options.service && !this.options.selectList) {

      this.options.service.serviceTS[this.options.service.functionName]('todo').subscribe((res) => {
          
        // console.log('%cBuscando: '+this.searchText,'background: #222; color: #84c3fd');
        // console.log(this.options);
        this.selectList = this.options.service.objectName?res[this.options.service.objectName]:res;
        callback(true);
        // console.log(this.selectList);
        // console.log('%c'+this.options.service.functionName,'background: #222; color: #ffff00');
        // console.log(this.selectList);
        if (this.selectList.length < 4) {
          this.height = (this.selectList.length * 50) + 'px';
        } else {
          this.height = '200px'
        }
      });
      
    }else{
      callback(false);
    }
  }

  writtenInSearchField(){
    console.log("writtenInSearchField");
    // this.mapSelected();
  }

  toggle_field_selector_class(){
    this.fieldSelector.class =='show_field_selector'?this.fieldSelector.class ='hide_field_selector':this.fieldSelector.class ='show_field_selector'
  }

  hello(){
    console.log("hello");
  }

  onSelectOption(option){
    console.log(option[this.options.selectItemName]+' - '+option[this.options.selectItemId]);


    if (this.options?.formControlName)this.options.form.controls[this.options.formControlName].setValue(option[this.options.selectItemName]);
    this.options.form.controls[this.options.formControlId].setValue(option[this.options.selectItemId]);
    // this.selectInput.setValue(data[this.options.formControlName]);
    this.fieldSelector.name = option[this.options.selectItemName];

  }

}
