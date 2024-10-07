import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface student{
  id:number;
  name:string;
  age:number;
  mark:number
}
const endpoint='http://localhost:50702/api/API/';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

   constructor(private http: HttpClient) {debugger }
   insertwebapi(studentdata: any): Observable<any> {
    return this.http.post(endpoint +'poststudenttab', studentdata);
  }
  getalldata(): Observable<any>{
    return this.http.get<student>(endpoint + 'getstudenttab');
  }
  deletedata(id:number): Observable<any>{
    return this.http.delete<student>(endpoint + 'deletestudenttabid/' + id);
  }
  getdatawithid(id:number): Observable<any>{
    return this.http.get<student>(endpoint + 'getstudenttabid/'+ id);
  }
  editdata(id:number,stdntdata:any): Observable<any>{
    return this.http.put<student>(endpoint + 'editstudenttabid/'+ id, stdntdata);
  }

}
