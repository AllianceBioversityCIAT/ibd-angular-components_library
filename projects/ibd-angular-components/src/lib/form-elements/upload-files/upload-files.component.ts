import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadFiles } from '../../models/upload-files-options.interface';
import { map } from 'rxjs/operators';
@Component({
  selector: 'ibdc-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {
  @Input() options:UploadFiles;
  constructor() { }

  ngOnInit(): void {
    console.log(this.options);
  }
  myUploader(event) {
    // this.selectFile.emit(event);
  }

  removeFile(index,object,itemLink:HTMLElement){
    itemLink.classList.remove('animate__animated', 'animate__fadeInRight', 'animate__faster');
    itemLink.classList.add('animate__animated', 'animate__bounceOutLeft');
    itemLink.addEventListener('animationend', () => {
      itemLink.style.maxHeight = '0px';
      if (object.citationId) {
        object.edited = true;
        object.active = false;
        setTimeout(() => {
          itemLink.style.display = 'none !important';
          itemLink.classList.add('hide-element');
        }, 300);
      }else{
        setTimeout(() => {
          this.options.filesList.splice(index,1);
        }, 300);
     
      }
      
      console.log(this.options.filesList);
    });
  }

  validateEmptyArrayWithActive(array){
    console.log('validateEmptyArrayWithActive');
    let arrayAux = [];

    array.map(resp=>{
      if (resp.show !== false) {
        arrayAux.push(resp)
      }
    })
    console.log(arrayAux);
    console.log(arrayAux.length);
    return arrayAux.length;

  }

  removeFileSaved(object,itemLink:HTMLElement){
    itemLink.classList.remove('animate__animated', 'animate__fadeInRight', 'animate__faster');
    itemLink.classList.add('animate__animated', 'animate__bounceOutLeft');
    itemLink.addEventListener('animationend', () => {
      itemLink.style.maxHeight = '0px';
  
        object.show = false;
        setTimeout(() => {
          itemLink.style.display = 'none';
        }, 300);

      console.log(this.options.filesSavedList);
    });
  }

  onSelectFiles(event,inputFile?){
    console.log(event.target.files);
    this.options.filesList.push(...event.target.files);
    inputFile.value = "";
  }

  getFormat(text:string){
    // console.log(text.split('.')[text.split('.').length-1]);
    switch (text.split('.')[text.split('.').length-1]) {
      case 'pdf':
        return 'pdf'
      case 'xlsx':
        return 'excel'
      case 'docx':
        return 'word'
      case 'jpeg':
        return 'jpg'
      case 'jpg':
        return 'jpg' 
      case 'png':
        return 'png' 
      default:
        break;
    }
  }

}
