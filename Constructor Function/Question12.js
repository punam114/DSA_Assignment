// 1.Define the factory function createCar.
// 2.The function should accept make, model, and year as parameters.
// 3.Return an object with the properties make, model, and year.
// 4.The describeCar() method should print "This car is a [year] [make] [model]."


function createCar(make,model,year){
  
    let obj = {};
    
    obj.make = make;
    obj.model = model;
    obj.year = year;
    
    obj.describeCar = function(){
      console.log(`This car is a ${year} ${make} ${model}.`)
    }
    return obj;
  }
  
  const car = createCar("Toyota", "Camry", 2022);
  car.describeCar();
  // Output: This car is a 2022 Toyota Camry.