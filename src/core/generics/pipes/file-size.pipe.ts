import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(bytes: number | null, decimals: number = 2): string {
    if(bytes == null){
      return "";
    }
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['octets', 'ko', 'Mo', 'Go', 'To'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const size = parseFloat((bytes / Math.pow(k, i)).toFixed(decimals));

    return `${size} ${sizes[i]}`;
  }

}
