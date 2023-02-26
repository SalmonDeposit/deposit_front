import {DepositField} from "./deposit-field.interface";

export interface DepositFormBuilder {
  build(): DepositField[];
  textUpdateBtnSubmit?:string;
  textAddBtnSubmit: string
}
