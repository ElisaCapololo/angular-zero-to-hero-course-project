import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**declaration of the variables found in the login form */
  username = "";
  password = "";
  errorMsg = "";
  

  /**We are injecting the auth service inside to our
   * constructor in our login component. And we are inject the
   * router here too, when our username and passwoed be ok, the program 
   * will redirect the user in one component */
  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  /**Login function that we call in login button with click event
   * here we are trying to display a message error in the screen, this
   * message we will display in html side.
   */
  login(){
    if(this.username.trim().length === 0){
      this.errorMsg = "Username is required";
    } else if(this.password.trim().length === 0){
      this.errorMsg = "Password is required";
    }else{
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);
      /**We have a condition that if the authetication is right then
       * the user is redirect to home page, if is wrong the user see a error
       * message
       */
      if(res === 200){
        this.router.navigate(['home'])
      }
      if(res === 403){
        this.errorMsg = "Invalid Credentials";
      }
    }
  }

}
