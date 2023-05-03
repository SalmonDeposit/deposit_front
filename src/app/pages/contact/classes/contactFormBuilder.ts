import {DepositFormBuilder} from "../../../../core/generics/interfaces/form/deposit-form-builder.interface";
import {DepositField} from "../../../../core/generics/interfaces/form/deposit-field.interface";
import {Validators} from "@angular/forms";

export class ContactFormBuilder implements DepositFormBuilder{
  textAddBtnSubmit: string = "Envoyer"

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
        name: 'lastname',
        placeholder: 'Nom',
        required: true,
        type: 'text',
        controlErrors: [
          {
            name: 'required',
            display: 'Nom demandé'
          }
        ],
        validators : [
          Validators.required
        ]
      },
      {
        name: 'asked_question',
        placeholder: 'Votre demande',
        required: true,
        type: 'textarea',
        controlErrors: [
          {
            name: 'required',
            display: 'Votre question ou votre remarque est demandée'
          }
        ],
        validators : [
          Validators.required
        ]
      }
    ];
  }

}
