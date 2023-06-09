import { NgModule }      from '@angular/core';
import {FileSizePipe} from "./file-size.pipe";
import {FileTypeImagePipe} from "./file-type-image.pipe";

@NgModule({
  imports: [],
  declarations:   [FileSizePipe, FileTypeImagePipe],
  exports:        [FileSizePipe, FileTypeImagePipe],
})

export class PipeModule {

  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
