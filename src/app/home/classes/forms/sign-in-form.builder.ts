import {DepositFormBuilder} from "../../../../core/generics/interfaces/form/deposit-form-builder.interface";
import {DepositField} from "../../../../core/generics/interfaces/form/deposit-field.interface";
import {Validators} from "@angular/forms";

export class SignInFormBuilder implements DepositFormBuilder{
  textBtnSubmit = "Connexion";
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
        name: 'firstName',
        placeholder: 'Mot de passe*',
        required: true,
        type: 'password',
        validators : [
          Validators.required
        ]
      }
    ];
  }

}
