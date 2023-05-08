import {DepositDocument} from "./document";

export class Folder{
  name:string;
  documents: DepositDocument[];
  folder: Folder;
  folders: Folder[]
  createdAt:Date;
  id: string;
  size: number;
}
