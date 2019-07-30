import { Component, OnInit }  from '@angular/core';
import { Router }             from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup}           from "@angular/forms";
import { ActivatedRoute }     from "@angular/router";

import { UserModel }          from '../modules/user.model';
import { UserService }        from '../modules/user.service';
import { BillingInfoModel }   from '../modules/billinginfo.model';
import { BillingInfoService } from '../modules/billinginfo.service';
import { AdModel }            from '../modules/ad.model';
import { AdService }          from '../modules/ad.service';
import { Md5 }                from 'ts-md5/dist/md5';

declare var $: any;

@Component({
  selector    : 'app-user-profile',
  templateUrl : './user-profile.component.html',
  styleUrls   : ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  user        : any;
  ads         : AdModel[]
  accountForm : FormGroup;
  submitted   = false;
  loading     = false;

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService,
              private billinginfoService: BillingInfoService,
              private adService: AdService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {

    this.user   = {};

    let user_id = this.route.snapshot.paramMap.get('user_id');

    this.getUserById(user_id);
    this.getAllAdByUserId(user_id);

    this.accountForm = this.formBuilder.group({
      username        : ['', [Validators.required, Validators.email]],
      password        : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });

    var self = this;    
    $(document).ready(function() {
      
      $('#username').keyup(function(e){
        if(e.keyCode == 13)
        {
          if (self.fAccount.username.errors) {  
            return;
          }

          var userid = $("#userid").val();
          var fname = "username";
          var fvalue = $(this).val();
          
          $(this).parent("div").prev().find("a").text(fvalue);
          $(".fa-check").click();
          
          self.updateUser(userid, fname, fvalue);
        }
      });

      $('#confirmPassword').keyup(function(e){
        if(e.keyCode == 13)
        {
          if (self.fAccount.password.errors || self.fAccount.confirmPassword.errors) {  
            return;
          }
          
          var userid = $("#userid").val();
          var fname = "password";
          var fvalue = $(this).val();
          fvalue = Md5.hashStr(fvalue).toString();

          $(".fa-check").click();
          
          self.updateUser(userid, fname, fvalue);
        }
      });

      $('#country, #city, #address, #mobile').keyup(function(e){
        if(e.keyCode == 13)
        {
          var userid = $("#userid").val();
          var fname = $(this).attr('id');
          var fvalue = $(this).val();
          
          $(this).parent("div").prev().find("a").text(fvalue);
          $(".fa-check").click();

          self.updateBillingInfo(userid, fname, fvalue);
        }
      });

      $(".fa-pencil").click(function() {
        $(".fa-check").click();
        if ($(this).parent("div").next().find("input").attr('id') == 'password') {
          $("#confimrPasswordDiv").removeClass("d-none");
          $("#confimrPasswordDiv").addClass("d-block");
        }

        $(this).parent("div").removeClass("d-block");
        $(this).parent("div").addClass("d-none");

        $(this).parent("div").next().removeClass("d-none");
        $(this).parent("div").next().addClass("d-block");
        $(this).parent("div").next().find("input").focus();
      });
      
      $(".fa-check").click(function() {
        if ($(this).parent("div").find("input").attr('id') == 'password') {
          $("#confimrPasswordDiv").removeClass("d-block");
          $("#confimrPasswordDiv").addClass("d-none");
        }

        $(this).parent("div").removeClass("d-block");
        $(this).parent("div").addClass("d-none");
        $(this).prev("input").val("");

        $(this).parent("div").prev().removeClass("d-none");
        $(this).parent("div").prev().addClass("d-block");
      })
    });

  }

  get fAccount() { return this.accountForm.controls; }

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

  onAccountSubmit() {
    this.submitted = true;    
    if (this.accountForm.invalid) {
      return;
    }
    this.loading = true;
    $('.modal-dialog-loader').show();

    let updateUser = {
      id              : this.user.id,
      username        : this.fAccount.username.value,
      password        : Md5.hashStr(this.fAccount.password.value).toString(),
      type            : this.user.type,
      message_id      : this.user.message_id,
      billinginfo_id  : this.user.billinginfo_id,
      token           : this.user.token
    }

    this.updateUser2(this.user.id, updateUser);
  }

  getUserById(id : string){
    this.userService.getUserById(id).subscribe((data:UserModel)=>{
      this.user = data;
      this.billinginfoService.getBillingInfoById(data.billinginfo_id).subscribe(data=>{
        let user_id = this.user.id;
        let username = this.user.username;
        Object.assign(this.user, data);
        this.user.id = user_id;
        this.user.username = username;
      });
    });
  }

  getAllAdByUserId(id : string){
    this.adService.getAllAdByUserId(id).subscribe(data=>{
      this.ads = data;
    });
  }

  updateUser(user_id:string, fname:string, fvalue:string){
    this.userService.updateUser(user_id, fname, fvalue)
      .subscribe( data => {
      });
  }

  updateUser2(user_id:string, user:UserModel){
    this.userService.updateUser2(user_id, user)
      .subscribe((user:UserModel) => {
        $('.modal-dialog-loader').hide();
        if (user && user.token) {          
          this.user = user;
        }
      },
      err => {
        $('.modal-dialog-loader').hide();
        this.accountForm.controls["username"].setErrors({ exist : true });
        this.loading = false;
      });
  }

  updateBillingInfo(user_id:string, fname:string, fvalue:string){
    this.userService.getUserById(user_id)
      .subscribe( (data:any) => {
        let billinginfo_id = data.billinginfo_id;
        this.billinginfoService.updateBillingInfo(billinginfo_id, fname, fvalue)
          .subscribe( data => {
          });
      });
    
  }

}
