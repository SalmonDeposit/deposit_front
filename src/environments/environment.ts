import {Environment} from "../core/generics/classes/environment";

export const environment : Environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api',
  // apiUrl: 'http://localhost:5000/api/v1',
  sanctumUrl:"http://localhost:5000/sanctum/csrf-cookie"
};
