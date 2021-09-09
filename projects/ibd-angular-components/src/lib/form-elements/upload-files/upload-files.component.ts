import { Component, Input, OnInit } from '@angular/core';
import { UploadFiles } from '../../models/upload-files-options.interface';

@Component({
  selector: 'ibdc-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {
  @Input() options:UploadFiles;
  constructor() { }

  ngOnInit(): void {
  }
  myUploader(event) {
    console.log(event.files);
    console.log(event);
}

}
