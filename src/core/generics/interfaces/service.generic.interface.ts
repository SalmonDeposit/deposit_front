import {Observable} from "rxjs";

export interface IServiceGeneric{
  read(id: string): Observable<any>
  list(): Observable<any>
  create(data: any): Observable<any>
  update(id: string, data: any): Observable<any>
  delete(id: string): Observable<any>

}
