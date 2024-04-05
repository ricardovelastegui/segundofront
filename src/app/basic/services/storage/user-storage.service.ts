import { Injectable } from '@angular/core';

const TOKEN = 's_token';
const USER = 's_user';


@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  static token: string;

  constructor() { }

  public saveToken(token: string): void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }

  static getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  public saveUser(user:any): void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  // static getUser(): any {
  //   this.token = localStorage.getItem(USER) != null ? localStorage.getItem(USER) : '{}';
  //   return JSON.parse(this.token);
  // }

  static getUser(): any {
    this.token = localStorage.getItem(USER) ?? '{}';
    return JSON.parse(this.token);
  }

  static getUserId(): string{
    const user = this.getUser();
    if ( user === null ){ return '' ; }
    return user.userId;
  }

  static getUserRole(): string{
    const user = this.getUser();
    if ( user === null ){ return '' ; }
    return user.role;
  }

  static isClientLoggedIn(): boolean{
    if (this.getToken() === null){
      return false;
    }
    const role: string = this.getUserRole();
    return role == 'CLIENT'; 
  }

  static isCompanyLoggedIn(): boolean{
    if (this.getToken() === null){
      return false;
    }
    const role: string = this.getUserRole();
    return role == 'COMPANY'; 
  }

  static signOut(): void{

    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }

}

  

