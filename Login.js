function verifyCreds(){
    //console.log("verifyCreds() function started")
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    //alert("Hello, " + fullName);

    if(fullName.length > 20 || fullName.length < 2){
        document.getElementById("loginStatus").innerHTML =
        "Invalid Full Name! Please Try Again...";
    }else if(badgeNumb>999 || badgeNumb<0){
        document.getElementById("loginStatus").innerHTML =
        "Invalid Badge Number! Please Try Again...";
    }else {
        alert("Welcome, " + fullName);
        location.replace("UATSpacePage.html");
    }
 }