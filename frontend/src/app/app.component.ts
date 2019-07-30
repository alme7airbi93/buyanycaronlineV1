import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserModel } from './modules/user.model';
import { UserService } from './modules/user.service';
import { AuthenticationService } from './auth/authentication.service';
import { ConditionalExpr } from '@angular/compiler';
import { BillingInfoModel } from './modules/billinginfo.model';
import { Md5 } from 'ts-md5/dist/md5';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'buyanycaronline';

  currentUser : UserModel;
  user        : UserModel;
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
      private userService: UserService) {

        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

      }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username        : ['', [Validators.required, Validators.email]],
      password        : ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.formBuilder.group({
      username        : ['', [Validators.required, Validators.email]],
      password        : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

  // convenience getter for easy access to form fields
  get fLogin() { return this.loginForm.controls; }
  get fRegister() { return this.registerForm.controls; }

  onLoginSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    $('.modal-dialog-loader').show();

    let password = Md5.hashStr(this.fLogin.password.value).toString();

    this.authenticationService.login(this.fLogin.username.value, password)
      .pipe(first())
      .subscribe(
        (data:UserModel) => {
          $('.modal-dialog-loader').hide();
          $('#loginPopup').modal('toggle');
          if (data.type == 'ADMIN')
            this.router.navigate(["/monitor-page"]);
          else
            this.router.navigate(['/user-profile/' + data.id]);
        },
        err => {
          $('.modal-dialog-loader').hide();
          this.loginForm.controls["password"].setErrors({ incorrect : true });
          this.loading = false;
        });
  }

  onRegisterSubmit() {
    this.submitted = true;
    
    if (this.registerForm.invalid) {
      return;
    }
    
    this.loading = true;
    $('.modal-dialog-loader').show();

    this.user = {
      id              : '',
      username        : this.fRegister.username.value,
      password        : Md5.hashStr(this.fRegister.password.value).toString(),
      type            : '',
      message_id      : '',
      billinginfo_id  : '',
      token           : ''
    }

    this.userService.addUser(this.user)
      .pipe(first())
      .subscribe(
        (user:UserModel) => {
          $('.modal-dialog-loader').hide();
          if (user && user.token) {
            $('#registerPopup').modal('toggle');
            
            this.authenticationService.register(user);
            this.currentUser = user;

            if (user.type == 'ADMIN')
              this.router.navigate(["/monitor-page"]);
            else
              this.router.navigate(['/user-profile/' + user.id]);
          }
        },
        err => {
          $('.modal-dialog-loader').hide();
          this.registerForm.controls["username"].setErrors({ exist : true });
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

