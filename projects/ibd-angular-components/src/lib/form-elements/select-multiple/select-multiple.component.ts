import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SelectMultipleOptions } from '../../models/select-multiple-interface';
@Component({
  selector: 'ibdc-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent implements OnInit {

 
  searchText = '';
  @Input() options:SelectMultipleOptions;
  @Output() unselect = new EventEmitter();
  @Output() onSelectOptionE = new EventEmitter();
  selectList=[];

  fieldSelector= {
    class:'hide_field_selector',
    value:'244242424',
    name:''
  }


  // valors='asasasas';

  currentRoute = this.router.routerState.snapshot.url;

 
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    if (this.options.shadow !== false) this.options.shadow = true;;
    this.searchText = this.options.initialSearchText?this.options.initialSearchText:this.searchText;
    this.consumeService();
  }

  countOnlyNoDelete(array:any){
    let cont = 0;
    for (const item of array) {

      if (!item.hasOwnProperty('active')) {
        cont++
      }else{
        if (item.active == true) {
          cont++;
        }
      }
    }

    return cont;
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

  
  closeSelect(focusElement){
    focusElement.blur();
  }

  mapSavedList(){
    this.options.savedList.list.map(savedItem=>{
      let itemFinded = this.selectList.find(originalItem=>originalItem[this.options.selectItemId] == savedItem[this.options.savedList.selectItemId]);
      if (savedItem?.active !== false) itemFinded?itemFinded.selected = true:null;;
      
      // console.log(itemFinded);
    });
    
    // console.log(this.selectList)
  
    
  }

  mapDisableList() {
    if (this.options.savedList.listToDisableElements) {
      this.options.savedList.listToDisableElements.map(savedItem => {
        // console.log(savedItem);
        let itemFinded = this.selectList.find(originalItem => originalItem[this.options.selectItemId] == savedItem[this.options.savedList.selectItemId]);
        itemFinded ? itemFinded.disabled = true : false;
        // console.log(itemFinded);
      });
    }
  }


  writtenInSearchField(){
    // console.log("writtenInSearchField");
    // this.mapSelected();
  }

  // toggle_field_selector_class(){
  //   this.fieldSelector.class =='show_field_selector'?this.fieldSelector.class ='hide_field_selector':this.fieldSelector.class ='show_field_selector'
  // }

  onSelectOption(option:any,focusElement:HTMLElement){
    // console.log(this.options.savedList.list);
    // console.log(option);
    // encontrar en lista de guardados la opcion seleccionada
    let itemFinded = this.options.savedList.list.find((savedItem:any)=>savedItem[this.options.savedList.selectItemId] == option[this.options.selectItemId]);
    let itemFindedIndex = this.options.savedList.list.findIndex((savedItem:any)=>savedItem[this.options.savedList.selectItemId] == option[this.options.selectItemId]);
    // toggle de seleccion (quitar / poner)
    option.selected =  !option.selected;
    // Eliminado logico o eliminar de elementos de un array que no están en la bd
    if (option.selected) {
      // opcion de agregar
      if (itemFinded) {
        //busca si uno de los guardados tiene borrado logico para ponerlo active true
        itemFinded.active = true;
      }else{
        // agregar option al array
        this.options.savedList.list.push({...option,active:true});
      }
    }else{
      //formas de borrar
      if (itemFinded) {
        // si tiene id de la bd pero de guardado
        
        if (itemFinded[this.options.savedList.idToSave]) {
          //borrado logico
          itemFinded.active = false;
        }else{
          //borrado de array
          this.options.savedList.list.splice(itemFindedIndex, 1);
        }
        this.unselect.emit(option);
      }
    }
    this.onSelectOptionE.emit(option)
    this.closeSelect(focusElement);
  }

}
