// Code your solution in this file!
const locationofHq=42
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
  return  someValue>locationofHq?someValue-locationofHq:locationofHq-someValue;

  }

  function distanceFromHqInFeet(someValue) {
   let distance = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distance*264
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return (start>destination?start-destination:destination-start)*264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance=distanceTravelledInFeet(start, destination)
    if (distance<400){
        return 0;
    }else if (distance>400&&distance<2000){
        return (distance-400)*0.02
    }else if (distance>2000){
        if(distance<2500){
            return 25;
            
        }else return 'cannot travel that far'
    }
  }