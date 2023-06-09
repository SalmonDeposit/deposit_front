import {DepositFormBuilder} from "../../../../core/generics/interfaces/form/deposit-form-builder.interface";
import {DepositField} from "../../../../core/generics/interfaces/form/deposit-field.interface";
import {Validators} from "@angular/forms";

export class FolderFormBuilder implements DepositFormBuilder{
  textAddBtnSubmit: string = "Créer un dossier";
  textUpdateBtnSubmit: string = "Modifier le dossier"

  build(): DepositField[] {
    return [
      {
        name: "name",
        placeholder: "Nom du dossier",
        validators: [
          Validators.required,
        ],
        controlErrors : [],
        type: "text",
        required: true
      },
    ];
  }
}
