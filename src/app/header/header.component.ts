import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   /**We are injecting the auth service inside to our
   * constructor in our login component. And we are inject the
   * router here too, when our username and passwoed be ok, the program 
   * will redirect the user in one component */
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  /**We are using this function navigate to a component to another
   * When we call the click event in our html, he call this function and
   * navigate to another component
    */
  goToHome(){
    this.router.navigate(['home']);
  }

  logout(){
    this.auth.logout();
  }

}
