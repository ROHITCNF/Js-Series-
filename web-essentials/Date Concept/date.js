// The first thing comes to mind WTF we have to study about date.(It's just a simple thing)
// ---> 23/01/2024 is a date
// This kind of thiking is 100% correct But actually is very different

/*
     Let's start with the basic concept first
     Source W3School & MDN web docs  
  */

//1. How to create a date object in JS
let currentDate = new Date(); //This will always give system timing (U can change it also by changing sytem timing)

/*Date obj has  some inbuilt functionality associated with it */

currentDate.getDate(); //daate of month
currentDate.getDay(); // 0 = sunday  and across
currentDate.getFullYear(); // year
currentDate.getHours();
currentDate.getMinutes();
currentDate.getMonth(); // 0 for January
currentDate.getMilliseconds();
currentDate.getTime(); //This is most important thing It gives current time in milliseconds
// which u can convert into epoch which is widely used every where

currentDate.getTimezoneOffset(); //It gives the number of minutes u are ahead or behind of GMT
// e.g in case of India(It is GMT+0530) It will give     -330 since India is 330 minutes ahead of
// GMT

/*
      All above things are perfectly fine if your code is not doing any fight with conversion of 
       different timezons
    */

// 1. How to convert time to Indian Time zone very easily.
//Method 1. (It's very simpple)
let systemTime = new Date();
let IndianTime = systemTime.toLocaleString("en-US", {
  timeZone: "Asia/Kolkata",
});

// Indian time will come into format of   '1/23/2024, 11:01:11 PM';
// Now on the basis of JS String functiality u can get your Hours , minutes and other things

/*
           Cons :- U can't apply above mentioned JS Date API's on IndianTime coz
                   It's a mere string
           */
//Method 2. (Littile logical but gives output as an date object)
// Get the current date and time
const now = new Date();

// Get the system's timezone offset in minutes
const userTimezoneOffset = now.getTimezoneOffset();

// Calculate the IST offset in minutes (UTC+5:30)
const ISTOffset = 330; // 5 hours 30 minutes * 60 minutes/hour

// Calculate the time difference in minutes between user and IST
const timeDifference = userTimezoneOffset + ISTOffset;

// Create a new Date object with the adjusted time difference
const ISTTime = new Date(now.getTime() + timeDifference * 60000); // 60000 milliseconds in a minute

console.log("Current System Time:", now);
console.log("IST Time:", ISTTime);

//Pros : U can use every API on this ISTTime

//Cons : The date object will still contain the system TimeZone (Not time and Date)
