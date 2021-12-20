function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sum1Res").innerHTML = sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML =
            "Craps - You Lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML =
            "Doubles - You Win";
    } else {
        document.getElementById("finalRes").innerHTML =
            "Draw - Try Again";
    }
}

function Blastoff() {
    var currTime = 50;
    document.getElementById("CountdownTimer").innerHTML = currTime + (str.fontcolor("aqua"));
    document.getElementById("CountdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = currTime;
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("CountdownTimer").innerHTML = "Blastoff!";
    }, 50000);
}

function btrBlastOff() {
    console.log("bteBlastOff() started");
    var currTime = 50;
    for (var i = 0; i < 10; i = i + 1) {
        debugger;
        setTimeout(function () {
            if (currTime > 25) {
                debugger;
                document.getElementById("CountdownTimer").innerHTML = currTime;
            } else {
                debugger;
                document.getElementById("CountdownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        }, 5000 * i);
    }
    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = "Blastoff!";
    }, 50000);
}

function start(){
    console.log("start() function started")
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function stopped")
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>"
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

 //Function to load and display data
 function updateDisplay(){
    console.log("Display time: " + theTime.getHours() + ":"  
    + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" 
    + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
    theTime = new Date;
    var timeRead = data[index].time_seconds;

    if(timeRead >= 10) {
        document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, " ");
        document.getElementById("data").rows["longitude"].innerHTML = dataRow("Longitude", data[index].longitude, " ");
        document.getElementById("data").rows["gps_altitude"].innerHTML = dataRow("GPS Altitude", data[index].gps_altitude, " ");
        document.getElementById("data").rows["bmpSensor_altitude"].innerHTML = dataRow("BMP Sensor Altitude", data[index].bmpSensor_altitude, " ");
        document.getElementById("data").rows["bmpSensor_pressure"].innerHTML = dataRow("BMP Sensor Pressure", data[index].bmpSensor_pressure, " ");
        document.getElementById("data").rows["bmpSensor_temp"].innerHTML = dataRow("BMP Sensor Temp", data[index].bmpSensor_temp, " ");
        document.getElementById("data").rows["digSensor_temp"].innerHTML = dataRow("Digital Sensor Temp", data[index].digSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_temp"].innerHTML = dataRow(">CSS Sensor Temp", data[index].cssSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_eCO2"].innerHTML = dataRow("CSS Sensor eCO2", data[index].cssSensor_eCO2, " ");
        document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = dataRow("CSS Sensor TVOC", data[index].cssSensor_TVOC, " ");
        document.getElementById("data").rows["UV"].innerHTML = dataRow("UV", data[index].UV, " ");
        document.getElementById("data").rows["accelX"].innerHTML = dataRow("Accel X", data[index].accelX, " ");
        document.getElementById("data").rows["accelY"].innerHTML = dataRow("Accel Y", data[index].accelY, " ");
        document.getElementById("data").rows["accelZ"].innerHTML = dataRow("Accel Z", data[index].accelZ, " ");
        document.getElementById("data").rows["magneticX"].innerHTML = dataRow("Magnetic X", data[index].magneticX, " ");
        document.getElementById("data").rows["magneticY"].innerHTML = dataRow("Magnetic Y", data[index].magneticY, " ");
        document.getElementById("data").rows["magneticZ"].innerHTML = dataRow("Magnetic Z", data[index].magneticZ, " ");
        document.getElementById("data").rows["gyroX"].innerHTML = dataRow("Gyro X", data[index].gyroX, " ");
        document.getElementById("data").rows["gyroY"].innerHTML = dataRow("Gyro Y", data[index].gyroY, " ");
        document.getElementById("data").rows["gyroZ"].innerHTML = dataRow("Gyro Z", data[index].gyroZ, " ");
        document.getElementById("clockTime").innerHTML = "Display time: " + theTime.getHours() + ":"  
    + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" 
    + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());
        if (index < 500){
            index++;
        } else {
            index = 0;
        }
    }
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("Synthwave.mp3");
    mySound.play();
}
function stopStation(){
    console.log("playStation() stopped")
    mySound.stop();
}

 function sound(src){
    this.sound = document.createElement("audio");
     this.sound.src = src;
//     this.sound.setAttribute("preload", "audio");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none"
//     document.body.appendChild(this.sound)
     this.play = function(){
         this.sound.play();
     }
     this.stop = function(){
         this.sound.pause();
     }
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function goLogin(){
    console.log("goLogin() started");
    location.replace("Login.HTML");
}

function goBoards(){
    console.log("goBoards() started");
    location.replace("Boards.html");
}

function goIndex(){
    console.log("goIndex() started");
    location.replace("Index.html");
}