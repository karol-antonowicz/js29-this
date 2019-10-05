/* var myCar = new Car();
myCar.drive(); 
myCar.topSpeed; <- tutaj juz bez nawiasów bo to daje info */
/*
var myString = new Striing();

myString = "hello";

myString.length;
myString.toLowerCase();

var myString2 = "hi there";

myString.toUpperCase(); */

// NEW OBJECTS //

/* var myArray = new Array();

myArray[0] = 8;
myArray[1] = "hello"; */

// tak samo jak powyżej tworze ciag/array tak moge nowy object //

/*  var myCar = new Object();

myCar.maxSpeed = 50;        // wlasciwosci //
myCar.driver = "Karol";     // properties //

console.log(myCar.driver); */

// teraz metofy : //

/* myCar.drive = function(){ console.log("now driving");}; // method //

myCar.drive(); */



var myCar2 = {
    maxSpeed: 60,     // nie musze dopisywac przed properties myCar2. //
    driver: "Ania", 
    drive: function(speed,time){ 
        console.log(speed * time);
    },
    test: function() {
        console.log(this);
    },
    logDriver: function() {
        console.log("driver name is " + this.driver); // this zamiast myCar2 //
    }


};  

console.log(myCar2.maxSpeed);
console.log(myCar2.driver);
myCar2.drive(50,3);
myCar2.test();
myCar2.logDriver();


