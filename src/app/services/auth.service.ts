import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**We are using this service to build all our functions */
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router) { }

  /**Fuction login that accept username and password */
  login(username:string, password:string){
    if(username === 'elisa' && password === '1234'){
      return 200;
    }else {
      return 403;
    }
  }

  logout(){
    this.router.navigate(['login']);
  }



}
