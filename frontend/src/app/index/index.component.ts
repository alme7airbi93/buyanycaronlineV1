import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

import { CarService } from '../car.service';

import { MakeModel } from '../make.model';
import { MakeService } from '../make.service';

import { ModelService } from '../model.service';
import { ModelModel } from '../model.model';

//import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  motors       : {};
  makes        : MakeModel[];
  models       : ModelModel[];
  fromYears    : number[];
  toYears      : number[];
  fromPrices   : number[];
  toPrices     : number[];
  colors       : {};
  transmissions: {};
  fueltypes    : {};
  conditions   : {};

  findForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, 
              private carService: CarService, 
              private makeService: MakeService, 
              private modelService: ModelService,
              private router: Router) { }

  ngOnInit() {
    
    this.motors   = [
      {
        "id"    : "cars",
        "value" : "CAR"
      },
      {
        "id"    : "boats",
        "value" : "BOAT"
      },
      {
        "id"    : "motorcycles",
        "value" : "MOTORCYCLE"
      },
      {
        "id"    : "heavyvehicles",
        "value" : "HEAVYVEHICLE"
      },
      {
        "id"    : "numberplates",
        "value" : "NUMBERPLATE"
      }
    ];

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

    /*this.models   = [
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
    ];*/

    this.fromYears = [];
    for(let i = 0; i <= 5; i++)
      this.fromYears[i] = i + 2015;

    this.toYears    = this.fromYears;
    this.fromPrices = [5000, 10000, 20000];
    this.toPrices   = [100000, 200000, 500000];

    this.colors   = [
      {
        "id"         : "Red",
        "value"      : "Red"
      },
      {
        "id"         : "Blue",
        "value"      : "Blue"
      },
      {
        "id"         : "Green",
        "value"      : "Green"
      },
    ];

    this.transmissions   = [
      {
        "id"         : "Transmission1",
        "value"      : "Transmission1"
      },
      {
        "id"         : "Transmission2",
        "value"      : "Transmission2"
      }
    ];

    this.fueltypes   = [
      {
        "id"         : "Fueltype1",
        "value"      : "Fueltype1"
      },
      {
        "id"         : "Fueltype2",
        "value"      : "Fueltype2"
      }
    ];

    this.conditions   = [
      {
        "id"         : "Condition1",
        "value"      : "Condition1"
      },
      {
        "id"         : "Condition2",
        "value"      : "Condition2"
      }
    ];

    this.findForm = this.formBuilder.group({
      motor:       ['cars', Validators.required],
      make:        ['', Validators.required],
      model:       ['', Validators.required],
      fromYear:    ['', Validators.required],
      toYear:      ['', Validators.required],
      fromPrice:   ['', Validators.required],
      toPrice:     ['', Validators.required],
      color:       ['', Validators.required],
      transmission:['', Validators.required],
      fueltype:    ['', Validators.required],
      condition:   ['', Validators.required]
    });
    
  }

  onSubmit(){
    //this.http.post('localhost:4200/car-search', JSON.stringify(this.findForm.value));
    
    localStorage.removeItem("search_params");
    localStorage.setItem("search_params", JSON.stringify(this.findForm.value));
    
    this.router.navigate(['car-search']);

    //console.log(this.findForm.value);
    //this.router.navigate(['car-search', this.findForm.value]);
    /*this.submitted = true;
    //if(this.findForm.valid){
      this.carService.getSearchAllCarOnIndex(this.findForm.value)
      .subscribe( data => {
        console.log("---");
        console.log(data);
        console.log("---");
        //this.cars = data;
        this.router.navigate(['car-search'], data);
      });
    //}*/
  }

  onMakeChange(event:Event) {
    
    const value:string = (<HTMLSelectElement>event.srcElement).value;
    this.getModelByMakeId(value);

  }

  getModelByMakeId(make_id : string){
    this.modelService.getAllModelByMakeId(make_id).subscribe(data=>{
      console.log(data);
      this.models = data;
      setTimeout("$('.selectpicker').selectpicker('refresh')", 0);

      //$('#modelnew').selectpicker('refresh');
    });
  }

  showHomeAdvanced() {
		
		var x = document.getElementById("home-form");
		if (x.className === "clearfix") {
			x.className += " open";
		} else {
			x.className = "clearfix";
		}

	}
}
