export class Folder{
  name?:string;
  documents?: Document[]
  folder?: Folder
  createdAt?:Date;
  id?: string;
}
