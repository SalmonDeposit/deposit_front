import { Pipe, PipeTransform } from '@angular/core';
import {DocumentTypeEnum} from "../../../app/dashboard/classes/models/document-type.enum";

@Pipe({
  name: 'FileTypeImagePipe'
})
export class FileTypeImagePipe implements PipeTransform {

  transform(value?: string, ...args: unknown[]): any {
    if(value == null){
      return;
    }
    if(value.includes('image')){
      return 'assets/img/icons/document-types/img.png'
    }
    switch (value) {
      case DocumentTypeEnum.pdf:
        return 'assets/img/icons/document-types/pdf.png'
      case DocumentTypeEnum.folder:
        return 'assets/img/icons/document-types/folder.png'
      default:
        return 'assets/img/icons/document-types/file.png'
    }


  }

}
