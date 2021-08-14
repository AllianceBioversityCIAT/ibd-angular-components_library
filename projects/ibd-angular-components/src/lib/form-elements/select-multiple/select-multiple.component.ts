import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { selectOptions } from '../../models/select-options.interface';
import { map } from 'rxjs/operators';
import { SelectMultipleOptions } from '../../models/select-multiple-interface';
@Component({
  selector: 'ibdc-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent implements OnInit {

 
  searchText = '';
  @Input() options:SelectMultipleOptions;
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
  }

  consumeService() {
    if (this.options.service && !this.options.selectList) {

      this.options.service.serviceTS[this.options.service.functionName]('todo').subscribe((res) => {
        this.selectList = res;
        // each key and sub keys to find the list
        if (this.options.service.objectName) this.options.service.objectName.map((objectName)=>this.selectList = this.selectList[objectName]);
        this.mapSavedList();
        // console.log(this.selectList);
      });
      
    }else{
      this.selectList = this.options.selectList;
      this.mapSavedList();
    }
  }

  mapSavedList(){
    // console.log(this.options.savedList.list);
    this.options.savedList.list.map(savedItem=>{
      // console.log(savedItem);
      let itemFinded = this.selectList.find(originalItem=>originalItem[this.options.selectItemId] == savedItem[this.options.savedList.itemId]);
      itemFinded.selected = true
      console.log(itemFinded);
    });
  }

  writtenInSearchField(){
    console.log("writtenInSearchField");
    // this.mapSelected();
  }

  toggle_field_selector_class(){
    this.fieldSelector.class =='show_field_selector'?this.fieldSelector.class ='hide_field_selector':this.fieldSelector.class ='show_field_selector'
  }

  onSelectOption(option:any){
    option.selected =  !option.selected;
    let itemFinded = this.options.savedList.list.find((savedItem:any)=>savedItem[this.options.savedList.itemId] == option[this.options.selectItemId])
    if (itemFinded) {
      console.log('%cFinded','background: #222; color: #ffff00');
      console.log(itemFinded);
      // poner active 0 si el item tiene id de la bd
      //eliminar del array si el item no tiene id de la bd
    }else{
      this.options.savedList.list.push(option)
    }

    // console.log(option[this.options.selectItemName]+' - '+option[this.options.selectItemId]);
    // this.selectInput.setValue(data[this.options.formControlName]);
    // this.fieldSelector.name = option[this.options.selectItemName];
  }

}
