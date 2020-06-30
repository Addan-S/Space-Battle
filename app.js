console.log("Working..."); 


class gameManager{
    constructor(){
  this.turn = false;
  
    }
  }
  
  
  class ussSwarch {
  constructor(){
  
   const hull= 20;
    const firepower= 5;
    const accuracy= .7;
    }
  
   ussAttack (alienShip){
    console.log("inside attack func firepower is : " + this.firepower);
  
  
  
    alienShip.hull = alienShip.hull - this.firepower;
  
    console.log("inside attack func alienship hull is now  : " + alienShip.hull);
   // return remain;
  }
  
  
  }
  
  
  class alienShips {
    constructor(){
  
    const maxHull= 6;
    const minHull =3;
  
    const maxFirepower=4;
    const minFirepower=2;
  
    const maxAccuracy=.6;
    const minAccuracy=.8;
  
    this.hull= getRandomIntInclusive( minHull ,maxHull);
    console.log("haul is " + this.hull)
    this.firepower= getRandomIntInclusive(minFirepower, maxFirepower);
    console.log("firepower is " + this.firepower)
    this.accuracy= getRandomIntInclusive(minAccuracy, maxAccuracy);
    console.log("accuracy is "+ this.accuracy)
    }
  }
  
  
  
  function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
  
  let alienShip1 = new alienShips();
  let alienShip2 = new alienShips();
  let alienShip3 = new alienShips();
  let alienShip4 = new alienShips();
  let alienShip5 = new alienShips();
  let alienShip6 = new alienShips();
  
  let ussSwarch1 = new ussSwarch();
  
  console.log(ussSwarch1.ussAttack(alienShip1));
  
  
  console.log("this is working")
