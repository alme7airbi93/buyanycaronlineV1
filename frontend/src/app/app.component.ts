import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserModel } from './user.model';
import { UserService } from './user.service';
import { AuthenticationService } from './auth/authentication.service';
import { ConditionalExpr } from '@angular/compiler';
import { BillingInfoModel } from './billinginfo.model';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'buyanycaronline';

  currentUser: UserModel;
  loginForm   : FormGroup;
  registerForm: FormGroup;
  returnUrl   : string;
  error_msg   : string;

  loading     = false;
  submitted   = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    // redirect to home if already logged in
    /*if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }*/
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username        : ['', Validators.required],
      password        : ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.formBuilder.group({
        username        : ['', Validators.required],
        password        : ['', [Validators.required, Validators.minLength(6)]],
        confirm_password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onLoginSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    /*if (this.loginForm.invalid) {
        return;
    }*/

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            (data:UserModel) => {
              $('#loginPopup').modal('toggle');
              if (data.type == 'ADMIN')
                this.router.navigate(["/monitor-page"]);
              else
                this.router.navigate(['/user-profile/' + data.id]);
            },
            error => {
                console.log(error);
                this.loading = false;
            });
  }

  onRegisterSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      /*if (this.registerForm.invalid) {
          return;
      }*/

      this.loading = true;

      this.userService.addUser(this.registerForm.value)
        .pipe(first())
        .subscribe(
          (user:UserModel) => {
            console.log(user);
            if (user && user.token) {
              $('#registerPopup').modal('toggle');
              $('#loginPopup').modal('toggle');
            }
          },
          err => {
              console.log(err.error.message);
              this.error_msg = err.error.message;
              this.loading = false;
          });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  menuFunction() {
    var x = document.getElementById("mainMenu-links");
    if (x.className === "clearfix") {
      x.className += " open";
    } else {
      x.className = "clearfix";
    }
  }
}

