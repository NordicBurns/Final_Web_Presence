class Propulsion {
    constructor(
        Speed,
        Power,
        burnTime
    ){
        this.Speed = Speed;
        this.Power = Power;
        this.burnTime = burnTime;
    }
    //Methods
    launch(){
        alert("Spacecarrier Taking Off")
        return true;
    }
    landing(){
        alert("Spacecarrier Landing")
        return true;
    }
    Refueling(fuelType, fuelAmt){
        alert("Loading Spacecarrier with " + fuelAmt + "Gallons of " + fuelType + "fuel.");
        return true;
    }
}

class Mission{
    constructor(
        fuelLevel,
        oxyLevel,
        foodLevel,
        spaceCraft,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        numOfAstronauts
    ){
        this.fuelLevel = fuelLevel;
        this.oxyLevel = oxyLevel;
        this.foodLevel = foodLevel;
        this.spaceCraft =spaceCraft;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.numOfAstronauts = numOfAstronauts;
    }
    launch(){
        alert("We are taking off");
    }
    disMissionLaunchDate(){
        alert("This Mission Launches on " + this.launchDateMonth 
        + " " + this.launchDateDay + ", " + this.launchDateYear + " with " + this.numOfAstronauts + " Astronauts aboard")

    }
}

function launchFall(){
    console.log("launchFall() started");
    fallLaunch.launch();
}

function displayFall(){
    console.log("displayFall() started");
    fallLaunch.disMissionLaunchDate();
}

function launchSpring(){
    console.log("launchSpring() started");
    springLaunch.launch();
}

function displaySpring(){
    console.log("displaySpring() started");
    springLaunch.disMissionLaunchDate();
}