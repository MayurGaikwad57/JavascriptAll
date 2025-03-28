// let myDate = new Date()
// console.log(myDate);  Normal way of declaring date

// let myDate = new Date()
// console.log(myDate.toString());  gives  day date time

// let myDate = new Date()
// console.log(myDate.toLocaleDateString());

// let myDate = new Date()
// console.log(myDate.toISOString());

// let myDate = new Date()
// console.log(myDate.toLocaleString()); gives date + time 

// let mycreatedDate = new Date(2024,0,15)
// console.log(mycreatedDate.toDateString()); //Date is given as input in array type so it starts from zero


// let mycreatedDate1 = new Date("2024-00-15")
// console.log(mycreatedDate.toLocaleString());

// let mycreatedDate2 = new Date("2024-02-24")
// console.log(mycreatedDate2.toLocaleString())




// Getting timestamps and comparing timestamps
// let mycreatedDate = new Date("2024-01-23")
// let myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(mycreatedDate.getTime())

let mycreatedDate = new Date("2024-02-15")
// let myTimestamp = Date.now()
// console.log(myTimestamp)
console.log(Math.floor(Date.now()/1000))  

// To get time in seconds this is how we do it 

// let mineDate = new Date("2024-05-23")
// console.log(mineDate.getMonth()+1)

// let maxDate = new Date("2024-02-24")
// console.log(maxDate.getMonth()+1)   // this is mosty done in this fomat 

let myDate = new Date("2024-05-24");
let day = myDate.getDate();
console.log(day)


let currDate = new Date();

function transform(currDate) {
    let day = String(currDate.getDate()).padStart(2,'0');
    let month = String(currDate.getMonth()+1).padStart(2,'0');
    let year = currDate.getFullYear();
     
    return `${year}-${month}-${day}`
  
}
console.log(transform(currDate));

const todayDate = new Date();
console.log(todayDate.getTime())
console.log(Math.floor(todayDate.getTime()/1000))

// Create a function that calculates the number of days between two dates
let date1 = new Date("2024-02-14");
let date2 = new Date("2024-02-20");

function days(date1,date2){
 let day = date1.getDate();
 let dayNew = date2.getDate();
 return `${day-dayNew}`
}
console.log(Math.abs(days(date1,date2)));


// Create a function that returns the next Monday from a given date.
function nextMonday(){
    let date = new Date();
  const getDate = date.getDay();
  const nextMonday = (8-getDate)%7;
  date.setDate(date.getDate() + nextMonday);

  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

console.log("Date is",nextMonday());


// Write a function that returns the last day of the current month.

    function lastDayOfMonth(year, month) {
        let date = new Date(year, month + 1, 0); // Get last day of the month
        return date.getDate();
    }


console.log(lastDayOfMonth(2025,2));

//Write a function that checks if a given year is a leap year.
function leapYear(year) {
  if(year % 4 === 0) {
    return true
  }
  else if(year%100 === 0) {
   return false;
  }
  else if(year%400 === 0) {
    return true;
  }
  else {
   return false;
  }
}

console.log(leapYear(2024));

// Create a function that formats the date as "DD-MM-YYYY HH:MM:SS".
function correctFormat(date) {
 let expectedDate = new Date(date);
 let year = expectedDate.getFullYear();
 let month = String(expectedDate.getMonth() + 1).padStart(2,'0');
 let day = String(expectedDate.getDate()).padStart(2,'0');
 let hours = String(expectedDate.getHours()).padStart(2,'0');
 let minutes = String(expectedDate.getMinutes()).padStart(2,'0');
 let seconds = String(expectedDate.getSeconds()).padStart(2,'0');

 return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
}

console.log(correctFormat("2024-02-26T14:05:30"));

// Write a function that returns the number of weekends (Saturdays and Sundays) between two dates.
function weekends(date1 , date2) {
 let startDate = new Date(date1);
 let endDate = new Date(date2);
 let count = 0;
// Iterating over date objects is not recommended 
// Also the above one is not a recommended approach as we have to traverse days individually
 while(startDate<=endDate) {
    if(startDate.getDay() === 0 || startDate.getDay() === 6) {
        count++;
    }
    startDate = new Date(startDate.getTime()+86400000);
 }
 return count;
}

console.log(weekends("2024-06-10","2024-06-20"));



