import {FileTableDisplay} from "./file-table-display";
import {DepositDocument} from "../../../../app/dashboard/classes/models/document";
import {Folder} from "../../../../app/dashboard/classes/models/folder";

export class FilesTableDisplayBuilder{
  public static build(documents: DepositDocument[], folders: Folder[] ) : FileTableDisplay[]{
    const documentsDisplay = documents?.map(d => FilesTableDisplayBuilder.buildForDocument(d))
    const foldersDisplay = folders?.map(f => FilesTableDisplayBuilder.buildForFolders(f))
    return [
      ...foldersDisplay,
      ...documentsDisplay
    ]
  }

  public static buildForDocument(document: DepositDocument) : FileTableDisplay{
      return {
        createdAt: document.createdAt,
        type: document.type,
        name: document.name,
        size: document.size,
        id: document.id,
        elementType: "document",
      }
  }
  public static buildForFolders(folder: Folder) : FileTableDisplay{
    return {
      createdAt: folder.createdAt,
      type: "folder",
      name: folder.name,
      size: folder.size,
      id: folder.id,
      elementType: "folder",
    }
  }

}
