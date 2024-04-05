import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

const BASIC_URL = 'http://localhost:8090';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_HEADER = 'Authorization';

  constructor(private http: HttpClient,) { }

  registerClient(signupRequestDTO:any):Observable<any>{
    return this.http.post(BASIC_URL + "client/signup",signupRequestDTO);
  }

  registerCompany(signupRequestDTO:any):Observable<any>{
    return this.http.post(BASIC_URL + "company/signup",signupRequestDTO);
  }

  login(username:string, password:string){
    return this.http.post(BASIC_URL + "authenticate", {username, password}, {observe: 'response'})
    .pipe(
      map((res:HttpResponse<any>) => {
        console.log(res);
        const tokenLength = res.headers.get(this.AUTH_HEADER)?.length;
        const bearerToken = res.headers.get(this.AUTH_HEADER)?.substring(7, tokenLength);
        console.log(bearerToken);
        return res;
      })
    );
  }
}
