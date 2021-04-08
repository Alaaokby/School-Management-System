import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'https://reqres.in/api/users';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _HttpClient:HttpClient) { }
  getStudents(params: {}):Observable<any>
  {
    return this._HttpClient.get(baseUrl,{params});
}
getStudentDetails(id:number):Observable<any>
{
  return this._HttpClient.get(`https://reqres.in/api/users/${id}`)
 }
}