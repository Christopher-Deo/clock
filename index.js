

// code to pull in html element into javascript
 const secondHand = document.querySelector('.second-hand');
 const minsHand = document.querySelector('.min-hand');
 const hourHand = document.querySelector('.hour-hand');

 //create function to set the initial date 
 function setDate() {
   const now = new Date();

//    code block to set the initial positions and create the movement of each clock hand (hrs, min, sec)
   const seconds = now.getSeconds();
// add 90 to end of secondHand.style..... due to shifting the clock hands an initial 90 degrees in the css to get them all at 12:00 position
// without this addition, each hand would be 90 degrees out of phase when the program is executed and the clock time would be incorrect.
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

   const mins = now.getMinutes();
   const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

   const hour = now.getHours();
   const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
 }
//  sets a time interval for how long this function will run????
 setInterval(setDate, 1000);

// calling the date function
 setDate();
