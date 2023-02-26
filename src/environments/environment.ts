import {Environment} from "../core/generics/classes/environment";

export const environment : Environment = {
  production: false,
  apiUrl: 'https://api.test.deposit.ovh/api',
  // apiUrl: 'http://localhost:5000/api/v1',
  sanctumUrl:"https://api.test.deposit.ovh/sanctum/csrf-cookie"
};
