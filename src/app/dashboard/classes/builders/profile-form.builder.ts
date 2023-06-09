import {DepositFormBuilder} from "../../../../core/generics/interfaces/form/deposit-form-builder.interface";
import {DepositField} from "../../../../core/generics/interfaces/form/deposit-field.interface";
import {Validators} from "@angular/forms";

export class ProfileFormBuilder implements DepositFormBuilder{
  textAddBtnSubmit = "Ajouter un profil";
  textUpdateBtnSubmit = "Modifier le profil"

  build(): DepositField[] {
    return [
      {
        name: 'email',
        placeholder: 'email*',
        required: true,
        type: 'email',
        controlErrors: [
          {
            name: 'email',
            display : 'Email pas au bon format'
          },
          {
            name: 'required',
            display: 'Email demandé'
          }
        ],
        validators : [
          Validators.email,
          Validators.required,
        ]
      },{
        name: 'phoneNumber',
        placeholder: 'N° Téléphone',
        required: true,
        type: 'tel',
        controlErrors: [
          {
            name: 'required',
            display: 'N° demandé'
          }
        ],
        validators : [
          Validators.required,
        ]
      },
      {
        name: 'firstname',
        placeholder: 'Prénom',
        required: false,
        type: 'text',
        controlErrors: [],
        validators : []
      },
      {
        name: 'lastname',
        placeholder: 'Nom',
        required: false,
        type: 'text',
        controlErrors: [],
        validators : []
      }
    ];
  }


}
