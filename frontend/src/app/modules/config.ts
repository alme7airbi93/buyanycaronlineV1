export class CommonService {

    baseurl: string = "http://localhost:3000";

    motors   = [
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

    years = [
        2015,
        2016,
        2017,
        2018,
        2019,
        2020
    ];

    fueltypes = [
        "Fueltype1",
        "Fueltype2"
    ];
  
    conditions = [
        "Condition1",
        "Condition2"
    ];
  
    transmissions = [
        "Transmission1",
        "Transmission2"
    ];
  
    colors = [
        "Red",
        "Green",
        "Blue"
    ];
  
    features = [
        "4 Wheel Drive",
        "Cruise Control",
        "Bluetooth System",
        "Air Conditioner"
    ];
   
    fromPrices = [
        5000,
        10000,
        20000
    ];

    toPrices = [
        100000,
        200000,
        500000
    ];
}