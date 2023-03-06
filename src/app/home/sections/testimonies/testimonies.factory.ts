import {DepositTestimony} from "./deposit-testimony.interface";

export class TestimoniesFactory{
  public static get(): DepositTestimony[]{
    return [{
      author: 'Aranxa',
      content: 'Application très intuitive et pratique, parfait pour garder des documents important et y accéder très facilement de ma poche'
    },
      {
        author: 'Chris',
        content: 'Top du top, très sécurisé je conseille vivement'
      },
      {
        author: 'Manel',
        content: 'Pratique et sûr pour stocker tous les documents officiels'
      }

    ]
  }
}
