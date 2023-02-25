import {DepositFormBuilder} from "../../../../core/generics/interfaces/form/deposit-form-builder.interface";
import {DepositField} from "../../../../core/generics/interfaces/form/deposit-field.interface";
import {Validators} from "@angular/forms";

export class SignInFormBuilder implements DepositFormBuilder{
  textBtnSubmit = "S'inscrire";
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
        placeholder: 'Nom de famille*',
        required: true,
        type: 'text',
        controlErrors: [
          {
            name: 'minlength',
            display : 'Nom trop court'
          }
        ],
        validators : [
          Validators.minLength(2),
          Validators.required
        ]
      }
    ];
  }

}
