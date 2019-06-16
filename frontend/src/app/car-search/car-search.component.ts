import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

import { CarModel } from '../car.model';
import { CarService } from '../car.service';

import { MakeModel } from '../make.model';
import { MakeService } from '../make.service';

import { ModelService } from '../model.service';
import { ModelModel } from '../model.model';

import { switchMap } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})

export class CarSearchComponent implements OnInit {

  car         : any;
  cars        : any;
  makes       : MakeModel[];
  models      : ModelModel[];
  fromYears   : number[];
  toYears     : number[];
  fromPrices  : number[];
  toPrices    : number[];
  selectedMake: string;
  
  findForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, 
              private carService: CarService, 
              private makeService: MakeService, 
              private modelService: ModelService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {

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

    this.fromYears = [];
    for(let i = 0; i <= 10; i++)
      this.fromYears[i] = i + 2010;

    this.toYears    = this.fromYears;
    this.fromPrices = [5000, 10000, 20000];
    this.toPrices   = [100000, 200000, 500000];

    this.findForm = this.formBuilder.group({
      make:       ['', Validators.required],
      model:      ['', Validators.required],
      fromYear:   ['', Validators.required],
      toYear:     ['', Validators.required],
      fromPrice:  ['', Validators.required],
      toPrice:    ['', Validators.required],
      orderid:    ['HIGHEST_PRICE', Validators.required]
    });

    let search_params = JSON.parse(localStorage.getItem("search_params"));
    localStorage.removeItem("search_params");

    //this.getAllMakes();
    if(!search_params) {
      this.getAllCar();
    } else {
      console.log(search_params);
      this.getSearchAllCarOnIndex(search_params);
    }

    /*$(document).ready(function() {
      $('li').click(function() {
        $(this).parent().prev("a").text($(this).text());
        this.onSubmit();
      });
    });*/
    
    //alert(document.querySelectorAll('li'));

  }
  ngAfterViewInit() {
    $('.selectpicker').selectpicker('refresh');
  }
  getCarById(id : string){
    this.carService.getCarById(id).subscribe(data=>{

      this.car = data;

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
  
  /*addCar(): void {
    this.router.navigate(['add-car']);
  }

  deleteCar(car: CarModel){
    
    this.carService.deleteCar(car.id).subscribe(data=>{
      console.log(data);
      this.getAllCar();
    });
  }

  updateCar(car: CarModel){
    localStorage.removeItem("carId");
    localStorage.setItem("carId", car.id);
    this.router.navigate(['edit-car']);
  }*/

}
