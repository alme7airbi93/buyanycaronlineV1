import { Component, OnInit }  from '@angular/core';
import { Router }             from "@angular/router";
import { ActivatedRoute }     from "@angular/router";
import { FormBuilder}         from "@angular/forms";
import { FormGroup}           from "@angular/forms";

import { AdModel }            from '../ad.model';
import { AdService }          from '../ad.service';
import { VehicleModel }       from '../vehicle.model';
import { VehicleService }     from '../vehicle.service';
import { CarModel }           from '../car.model';
import { CarService }         from '../car.service';
import { MakeModel }          from '../make.model';
import { ModelModel }         from '../model.model';

declare var $: any;

@Component({
  selector    : 'app-manage-ad',
  templateUrl : './manage-ad.component.html',
  styleUrls   : ['./manage-ad.component.css']
})

export class ManageAdComponent implements OnInit {

  car         : any;
  ads         : AdModel[];
  findForm    : FormGroup;
  //submitted = false;
  
  makes       : MakeModel[];
  models      : ModelModel[];
  imgcount    : number;

  constructor(private formBuilder: FormBuilder, 
              private adService: AdService,
              private vehicleService: VehicleService,
              private carService: CarService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {

    /*let ad_id = localStorage.getItem("ad_id");
    if(!ad_id){
      this.router.navigate(['']);
      return;
    }*/

    this.makes   = [
      {
        "id"    : "-Lg0ae0f-ovBtrTVPDIH",
        "value" : "MakeValue1"
      },
      {
        "id"    : "-Lg0ae0f-ovBtrTVPDII",
        "value" : "MakeValue2"
      }
    ];

    this.models   = [
      {
        "id"         : "-Lg0ae0f-ovBtrTVPDIH",
        "make_id"    : "-Lg0ae0f-ovBtrTVPDIH",
        "modelvalue" : "ModelModelValue11"
      },
      {
        "id"         : "-Lg0ae0f-ovBtrTVPDII",
        "make_id"    : "-Lg0ae0f-ovBtrTVPDII",
        "modelvalue" : "ModelModelValue21"
      },
      {
        "id"         : "-Lg0ae0f-ovBtrTVPDIJ",
        "make_id"    : "-Lg0ae0f-ovBtrTVPDII",
        "modelvalue" : "ModelModelValue22"
      }
    ];

    this.imgcount = 4;
    this.car = {};

    let ad_id = this.route.snapshot.paramMap.get('ad_id');

    this.getCarByAdId(ad_id);

    var self = this;
    
    $(document).ready(function() {
     
      $(".ba-input").change(function() {
        
        var fname = $(this).attr('id');
        var fvalue = $(this).val();
        var text = fvalue;

        if(fname == 'make_id' || fname == 'model_id')
          text = $(this).find("option:selected").text();

        $(this).parent("div").prev().find("a").text(text);

        $(".fa-check").click();

        if( fname == 'title' || fname == 'price' || fname == 'description') {
          var id = $("#ad_id").val();
          self.updateAd(id, fname, fvalue);
        } else if(fname == 'make_id' || fname == 'model_id' || fname == 'year') {
          var id = $("#vehicle_id").val();
          self.updateVehicle(id, fname, fvalue);
        } else if (fname == 'transmission' || fname == 'fueltype') {
          var id = $("#car_id").val();
          self.updateCar(id, fname, fvalue);
        }
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

        $(this).parent("div").prev().removeClass("d-none");
        $(this).parent("div").prev().addClass("d-block");
      })

      $(".PhotoBox-image").click(function() {
        console.log($(this).html());
        $("#PhotoBox-preview").html($(this).html());
      });

      $(".PhotoBox-delete").click(function() {
        //console.log($(this).html());
        //$("#PhotoBox-preview").html($(this).html());
        $(this).parent(".PhotoBox-item").css('display', 'none');
      });
    });

  }

  getCarByAdId(ad_id : string){
    this.carService.getCarByAdId(ad_id).subscribe(data=>{
      this.car = data;
    });
  }

  updateAd(id:string, fname:string, fvalue:string){
    this.adService.updateAd(id, fname, fvalue)
      .subscribe( data => {
      });
  }

  updateVehicle(id:string, fname:string, fvalue:string){
    this.vehicleService.updateVehicle(id, fname, fvalue)
      .subscribe( data => {
      });
  }

  updateCar(id:string, fname:string, fvalue:string){
    this.carService.updateCar(id, fname, fvalue)
      .subscribe( data => {
      });
  }

  /*menuFunction() {alert('a');
    var x = document.getElementById("mainMenu-links");
    if (x.className === "clearfix") {
      x.className += " open";
    } else {
      x.className = "clearfix";
    }
  }*/

  /*
  		function menuFunction() {
			var x = document.getElementById("mainMenu-links");
			if (x.className === "clearfix") {
				x.className += " open";
			} else {
				x.className = "clearfix";
			}
		}

		$(".ba-input").change(function() {
				
			var ad_id = $("#ad_id").val();
			var fname = $(this).attr('id');
			var fvalue = $(this).val();

			$(this).parent("div").prev().find("a").text(fvalue);
			$(".fa-check").click();
			
			console.log(ad_id);
			$.ajax({
				dataType: 'json',
				type:'POST',
				url: "/manageadpage/updatead",
				data:{ad_id:ad_id, fname:fname, fvalue:fvalue}
			}).done(function(data){
				//toastr.success('Created Successfully.', 'Success Alert', {timeOut: altTimeOut});
			});

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

			$(this).parent("div").prev().removeClass("d-none");
			$(this).parent("div").prev().addClass("d-block");
    })
    */

  /*getCarById(id : string){
    this.carService.getCarById(id).subscribe(data=>{
      this.car = data;
    });
  }

  getAllAdByCarId(id : string){
    this.adService.getAllAdByCarId(id).subscribe(data=>{
      this.ads = data;
    });
  }

  updateCar(car_id:string, fname:string, fvalue:string){
    this.carService.updateCar(car_id, fname, fvalue)
      .subscribe( data => {
        console.log(data);
      });
  }

  updateVehicle(car_id:string, fname:string, fvalue:string){
    this.vehicleService.updateVehicle(car_id, fname, fvalue)
      .subscribe( data => {
        console.log(data);
      });
  }

  getAllCar(): void {
    this.carService.getAllCar().subscribe(data=>{

      this.cars = data;

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
  
  getCarDetailById(car_id : string){
    localStorage.removeItem("car_id");
    localStorage.setItem("car_id", car_id);
    this.router.navigate(['car-detail']);
  }

  getSearchAllCarOnIndex(params: any){
    this.carService.getSearchAllCarOnIndex(params).subscribe( data => {
      this.cars = data;
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
      this.carService.getSearchAllCar(this.findForm.value)
      .subscribe( data => {
        console.log("+++++++++++++++");
        console.log(data);
        console.log("+++++++++++++++");
        this.cars = data;
        //this.router.navigate(['']);
      });
    //}
  }

  // get the form short name to access the form fields
  get f() { return this.findForm.controls; }
  */

  /*addCar(): void {
    this.router.navigate(['add-car']);
  }

  deleteCar(car: CarModel){
    
    this.carService.deleteCar(car.id).subscribe(data=>{
      console.log(data);
      this.getAllCar();
    });
  }*/

  

}
