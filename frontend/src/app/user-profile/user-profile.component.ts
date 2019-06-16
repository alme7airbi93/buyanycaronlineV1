import { Component, OnInit }  from '@angular/core';
import { Router }             from "@angular/router";
import { FormBuilder}         from "@angular/forms";
import { FormGroup}           from "@angular/forms";
import { ActivatedRoute }     from "@angular/router";

import { UserModel }          from '../user.model';
import { UserService }        from '../user.service';
import { BillingInfoModel }   from '../billinginfo.model';
import { BillingInfoService } from '../billinginfo.service';
import { AdModel }            from '../ad.model';
import { AdService }          from '../ad.service';

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
  //submitted = false;
  
  constructor(private formBuilder: FormBuilder, 
              private userService: UserService,
              private billinginfoService: BillingInfoService,
              private adService: AdService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {

    this.user   = {};

    let user_id = this.route.snapshot.paramMap.get('user_id');
    console.log("user_id" + user_id);

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
    this.userService.getUserById(id).subscribe(data=>{
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
        console.log(data);
      });
  }

  updateBillingInfo(user_id:string, fname:string, fvalue:string){
    this.userService.getUserById(user_id)
      .subscribe( (data:any) => {
        console.log(data);
        let billinginfo_id = data.billinginfo_id;
        this.billinginfoService.updateBillingInfo(billinginfo_id, fname, fvalue)
          .subscribe( data => {
            //console.log(data);
          });
      });
    
  }

  /*getAllUser(): void {
    this.userService.getAllUser().subscribe(data=>{

      this.users = data;

    });
  };

  getAllMakes(): void {
    this.makeService.getAllMakes().subscribe(data=>{

      this.makes = data;

    });
  };

  getModelByMakeId(make_id : string){
    this.modelService.getAllModelByMakeId(make_id).subscribe(data=>{

      this.models = data;

    });
  }
  
  getUserDetailById(user_id : string){
    localStorage.removeItem("user_id");
    localStorage.setItem("user_id", user_id);
    this.router.navigate(['user-detail']);
  }

  getSearchAllUserOnIndex(params: any){
    this.userService.getSearchAllUserOnIndex(params).subscribe( data => {
      this.users = data;
    });
  }

  onMakeChange(event:Event) {
    
    const value:string = (<HTMLSelectElement>event.srcElement).value;
    this.getModelByMakeId(value);

  }

  onSubmit(){
    this.submitted = true;
    console.log(this.findForm);
    //if(this.findForm.valid){
      this.userService.getSearchAllUser(this.findForm.value)
      .subscribe( data => {
        console.log("+++++++++++++++");
        console.log(data);
        console.log("+++++++++++++++");
        this.users = data;
        //this.router.navigate(['']);
      });
    //}
  }

  // get the form short name to access the form fields
  get f() { return this.findForm.controls; }
  */

  /*menuFunction() {
    var x = document.getElementById("mainMenu-links");
    if (x.className === "clearfix") {
      x.className += " open";
    } else {
      x.className = "clearfix";
    }
  }*/
  

  /*addUser(): void {
    this.router.navigate(['add-user']);
  }

  deleteUser(user: UserModel){
    
    this.userService.deleteUser(user.id).subscribe(data=>{
      console.log(data);
      this.getAllUser();
    });
  }*/

  

}
