import {DepositFormBuilder} from "../../../../core/generics/interfaces/form/deposit-form-builder.interface";
import {DepositField} from "../../../../core/generics/interfaces/form/deposit-field.interface";
import {Validators} from "@angular/forms";

export class UpdatePasswordFormBuilder implements DepositFormBuilder{
  textAddBtnSubmit: string = "Mettre à jour mon mot de passe";

  build(): DepositField[] {
    return [{
      placeholder: "Email",
      type:  "text",
      required: true,
      validators: [
        Validators.required,
        Validators.email,
      ],
      controlErrors: [
        {
          name: 'email',
          display: "L'email est requis"
        }
      ],
      name: "email"
    },
      {
        placeholder: "Mot de passe actuel",
        type:  "password",
        required: true,
        validators: [
          Validators.required
        ],
        controlErrors: [
          {
            name: 'password',
            display: 'Le mot de passe est requis'
          }
        ],
        name: "password"
      },
      {
        placeholder: "Nouveau mot de passe",
        type:  "password",
        required: true,
        validators: [
          Validators.required
        ],
        controlErrors: [
          {
            name: 'password',
            display: 'Le mot de passe est requis'
          }
        ],
        name: "new_password"
      },
      {
        placeholder: "Confirmation nouveau mot de passe",
        type:  "password",
        required: true,
        validators: [
          Validators.required
        ],
        controlErrors: [
          {
            name: 'password',
            display: 'Le mot de passe est requis'
          }
        ],
        name: "new_password_confirmation"
      }
    ];
  }

}
