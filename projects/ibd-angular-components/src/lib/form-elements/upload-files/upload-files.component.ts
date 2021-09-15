import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadFiles } from '../../models/upload-files-options.interface';

@Component({
  selector: 'ibdc-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {
  @Input() options:UploadFiles;
  @Output() selectFile = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
  myUploader(event) {
    console.log(event.files);
    console.log(event);
    this.selectFile.emit(event);
  }

}
