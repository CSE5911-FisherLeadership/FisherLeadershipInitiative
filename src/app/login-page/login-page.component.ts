import { Component, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
// import firebase as firebase;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// var ui = new firebaseui.auth.AuthUI(firebase.auth());