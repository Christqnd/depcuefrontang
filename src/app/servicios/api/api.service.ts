import { Injectable } from '@angular/core';
import { LoginI } from '../..//models/login.interface';
import { ResponseI } from '../..//models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbonoI } from 'app/models/abono.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:4200/";
  // url: string = "http://localhost:8080;

  constructor(private http: HttpClient) { }

  loginByUser(form: LoginI): Observable<LoginI> {
    let direccion = this.url + "authenticate";
    return this.http.post<LoginI>(direccion, form);
  }

  validateToken(): Observable<string> {
    let direccion = this.url + "authenticateValidate";
    var token = 'TokenDeportivoCuenca ' + localStorage.getItem("token");
    console.log('Token recuperado:' + token);
    const headers = new HttpHeaders()
      .set('Authorization', token);
    return this.http.get(direccion, { 'headers': headers, responseType : 'text' });
  }

  getAllAbonos(): Observable<AbonoI[]> {
    let direccion = this.url + "abonos";
    var token = 'TokenDeportivoCuenca ' + localStorage.getItem("token");
    // console.log('token generado:'+token);
    const headers = new HttpHeaders()
      // .set('content-type', 'application/json')
      // .set('Access-Control-Allow-Origin', '*')
      // .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
      // .set('Authorization', 'TokenDeportivoCuenca eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYWxjbyIsImV4cCI6MTY2NTY0NDk0MiwiaWF0IjoxNjY1NjMwNTQyfQ.HG8TkYZufitFiDHHEOAwdttp-2rYJQ7G_iymal4MW65pMv9lbkNJ6Ynd04ssNjgU0KOMot6yKQnSNQbChulN4w');
      .set('Authorization', token);
    return this.http.get<AbonoI[]>(direccion, { 'headers': headers });
  }

}
