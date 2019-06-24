import { Component, OnInit }  from '@angular/core';
import { Router }             from "@angular/router";
import { FormBuilder}         from "@angular/forms";
import { FormGroup}           from "@angular/forms";
import { ActivatedRoute }     from "@angular/router";

import { UserModel }          from '../models/user.model';
import { UserService }        from '../models/user.service';
import { BillingInfoModel }   from '../models/billinginfo.model';
import { BillingInfoService } from '../models/billinginfo.service';
import { AdModel }            from '../models/ad.model';
import { AdService }          from '../models/ad.service';

declare var $: any;

@Component({
  selector    : 'app-user-profile',
  templateUrl : './user-profile.component.html',
  styleUrls   : ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  user        : any;
  ads         : AdModel[]
  findForm    : FormGroup;
  
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

    var self = this;
    
    $(document).ready(function() {
     
      $(".ba-input").change(function() {
        
        var userid = $("#userid").val();
        var fname = $(this).attr('id');
        var fvalue = $(this).val();

        var text = fvalue;
        if (fname == 'password') {
          let value = "";
          for (let i = 0; i < fvalue.length; i++)
            value = value + "*";
          text = value;
        }

        $(this).parent("div").prev().find("a").text(text);
        $(".fa-check").click();

        if(fname == 'username' || fname == 'password')
          self.updateUser(userid, fname, fvalue);
        else
          self.updateBillingInfo(userid, fname, fvalue);

      });
      
      $(".fa-pencil").click(function() {
        $(this).parent("div").removeClass("d-block");
        $(this).parent("div").addClass("d-none");

        $(this).parent("div").next().removeClass("d-none");
        $(this).parent("div").next().addClass("d-block");
        $(this).parent("div").next().find("input").focus();
      });
      
      $(".fa-check").click(function() {
        $(this).parent("div").removeClass("d-block");
        $(this).parent("div").addClass("d-none");
        $(this).prev("input").val("");

        $(this).parent("div").prev().removeClass("d-none");
        $(this).parent("div").prev().addClass("d-block");
      })
    });

  }

  getUserById(id : string){
    this.userService.getUserById(id).subscribe((data:UserModel)=>{
      this.user = data;
      this.billinginfoService.getBillingInfoById(data.billinginfo_id).subscribe(data=>{
        let user_id = this.user.id;
        Object.assign(this.user, data);
        this.user.id = user_id;
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
