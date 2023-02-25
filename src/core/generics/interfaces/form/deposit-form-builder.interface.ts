import {DepositField} from "./deposit-field.interface";

export interface DepositFormBuilder {
  build(): DepositField[];
  textBtnSubmit:string;
}
