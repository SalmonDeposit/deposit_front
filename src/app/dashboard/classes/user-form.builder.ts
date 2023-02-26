import {DepositFormBuilder} from "../../../core/generics/interfaces/form/deposit-form-builder.interface";
import {DepositField} from "../../../core/generics/interfaces/form/deposit-field.interface";
import {Validators} from "@angular/forms";


export class UserFormBuilder implements DepositFormBuilder{
  textUpdateBtnSubmit = "Modifier";
  textAddBtnSubmit = "Créer "
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
      },
      {
        name: 'simonCoinStock',
        placeholder: 'simonCoinStock',
        required: false,
        type: 'number',
        validators : []
      },
      {
        name: 'password',
        placeholder: 'Mot de passe*',
        required: true,
        type: 'password',
        validators : [
          // Validators.required
        ]
      },
      {
        name: 'password_confirmation',
        placeholder: 'Mot de passe*',
        required: true,
        type: 'password',
        validators : [
          // Validators.required
        ]
      }
    ];
  }

}
