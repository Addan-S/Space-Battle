console.log("Working..."); 

  
  
  class MyShip {
    constructor()
    {
      this.hull = 100;
      this.firepower = Math.floor(Math.random() * (10 - 0) + 0);
      this.accuracy = 0.8;
    }

    attack(alienShip) 
    {
      console.log("Attacking.."); 
      alienShip.hull -= this.firepower; 
      console.log(`The Alien ship now has ${alienShip.hull} health remaining.`); 
    }
  
  }
  
  
  class AlienShips {
    constructor() 
    {
      this.hull = 100 ;
      this.firepower = Math.floor(Math.random() * (10 - 0) + 0);
      this.accuracy = 0.8;   
    }


    attack(myShip) 
    {
      console.log("Enemy Attacking.."); 
      myShip.hull -= this.firepower; 
      console.log(`You now have ${myShip.hull} health remaining.`); 
    }

  }

  const alienShip1 = new AlienShips();
  const alienShip2 = new AlienShips();
  const alienShip3 = new AlienShips();
  const alienShip4 = new AlienShips();
  const alienShip5 = new AlienShips();
  const alienShip6 = new AlienShips();
  
  const milleniumFalcon = new MyShip();

  let enemyShips = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]; 



  let battle = () => {
      //let hitOrMiss = Math.floor(Math.random() * (1 - 0) + 0);
      milleniumFalcon.firepower = Math.floor(Math.random() * (10 - 0) + 0); 
      //if(hitOrMiss < milleniumFalcon.accuracy || milleniumFalcon.firepower != 0)
   //   {
        console.log("Attacking.."); 
        console.log(`You did ${milleniumFalcon.firepower} damage.`)
        alienShip1.hull -= milleniumFalcon.firepower; 
        console.log(`The Alien ship now has ${alienShip1.hull} health remaining.`); 
 //     }

  //    else console.log("You took aim and you missed!");
      
      alienShip1.firepower = Math.floor(Math.random() * (10 - 0) + 0); 
      console.log("Enemy Attacking..", alienShip1.firepower); 
      console.log(`Enemy inflicted ${alienShip1.firepower} damage.`)
      milleniumFalcon.hull -= alienShip1.firepower; 
      console.log(`You now have ${milleniumFalcon.hull} health remaining.`); '\n \n \n';


      console.log(`Health: ${milleniumFalcon.hull} \n Enemy Health: ${alienShip1.hull}`);

      if(alienShip1.hull <= 0 ) 
      { 

        console.log("You destroyed the enemy ship!"); 
      }
      else if(milleniumFalcon.hull <= 0) console.log("Your ship was destroyed..Try Again!")
    
  
  }
  

  
  
