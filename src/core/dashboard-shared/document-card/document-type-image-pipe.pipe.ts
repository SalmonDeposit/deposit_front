import { Pipe, PipeTransform } from '@angular/core';
import {DocumentTypeEnum} from "../../../app/dashboard/classes/models/document-type.enum";

@Pipe({
  name: 'documentTypeImagePipe'
})
export class DocumentTypeImagePipePipe implements PipeTransform {

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
      default:
        return 'assets/img/icons/document-types/file.png'
    }


  }

}
