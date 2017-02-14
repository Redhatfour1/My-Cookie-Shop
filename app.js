'use strict';
//Set up an array for the hours of operation.
var hourly = ['10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];
var locationsArray = ['', 'Pike Place', 'SeaTac Airport', 'Southcenter', 'Bellevue Square', 'Alki', 'Daily Totals:'];
var dailyTotalRow = ['Daily Total:'];
//This is a Object Constructor function
function CookieShops (nameOfLocation, minNumOfCustomers, maxNumOfCustomers, aveCookeisPerSale) {
  this.nameOfLocation = nameOfLocation;
  this.minNumOfCustomers = minNumOfCustomers;
  this.maxNumOfCustomers = maxNumOfCustomers;
  this.aveCookeisPerSale = aveCookeisPerSale;
}

var pikePlace = new CookieShops('pikePlace', 17, 18, 5.2);
var seaTacAirport = new CookieShops('seaTacAirport', 6, 24, 1.2);
var southCenter = new CookieShops('southCenter', 11, 38, 1.9);
var bellevueSquare = new CookieShops('bellevueSquare', 20, 48, 3.3);
var alki = new CookieShops('alki', 3, 24, 2.6);

CookieShops.prototype.randomNumOfCustomersPerHour = function() {
  return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
  console.log('Random number of customers: ' + randomNumOfCustomersPerHour);
},

CookieShops.prototype.calCookiesPerHour = function() {
//Created an empty array to store the cookies per hour and used a for loop inside of a function to loop through the hourly array.
  var cookiesPerHourArray = [];
  for(var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
    var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
    this.cookiesPerHourArray.push(cookiesSold);
    this.dailyTotal += cookiesSold;
  }
  console.log('Cookies per hour array: ' + cookiesPerHourArray);
  return this.cookiesPerHourArray;
};

function cookiesPerHourData(number) {
  console.log('Number: ' + number.nameOfLocation);
  var cookiesPerHour = nameOfLocation.calCookiesPerHour();
  var numOfCookiesPerDay = document.getElementById(number.nameOfLocation);
  console.log('Number of cookies per day: ' + numOfCookiesPerDay);

  var hourlyArray = [];

  for(var index = 0; index < cookiesPerHour.length; index++) {
    console.log('Number of cookies per hour: ' + cookiesPerHour[index]);
    var listElement = document.createElement('li');
    listElement.textContent = hourly[index] + cookiesPerHour[index] + ' cookies';
    numOfCookiesPerDay.appendChild(listElement);
    hourlyArray.push(cookiesPerHour[index]);
  }
  var dailyTotalListItem = document.createElement('li');
  listElement.textContent = 'Daily total: ' + sum + ' cookies';
  return hourlyArray;
};

var pikePlaceArray = cookiesPerHourData(pikePlace);
var seaTacAirportArray = cookiesPerHourData(seaTacAirport);
var southCenterArray = cookiesPerHourData(southCenter);
var bellevueSquareArray = hourlyData(bellevueSquare);
var alkiArray = cookiesPerHourData(alki);

var tableData = [hourly, pikePlaceArray, seaTacAirportArray, southCenterArray, bellevueSquareArray, alkiArray, dailyTotalRow];
console.log('Table data: ' + tableData);

var tableElement = document.getElementById('tableData');
console.log('Table element: ' + tableElement);

for(var index = 0; index < tableData.length; index++) {
  var rowData = tableData[index];
  console.log('Row data: ' + rowData);

  var rowElement = document.createElement('tr');
  console.log('Row element: ' + rowElement);

  for(var i = 0; i < rowData.length; i++) {
    var rowContent = rowData[i];
    console.log('Row content: ' + rowContent);

    var dataElement = document.createElement('tr');
    dataElement.textContent = rowContent;
    rowElement.appendChild(dataElement);
  }
  tableElement.appendChild(rowElement);
}

// Object an literal for this location with seven properties.
// var pikePlace = {
//   minCustomer: 17,
//   maxCustomer: 88,
//   aveCookiesPerSale: 5.2,
//   dailyTotal: 0,
//   cookiesPerHourArray: [],
//   customersPerHour: function() {
//     //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
//
//   },
//
//
//   : function() {
//     for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
//       var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
//       this.cookiesPerHourArray.push(cookiesSold);
//       this.dailyTotal += cookiesSold;
//       console.log(this.cookiesPerHourArray);
//     }
//     //console.log(hourlyArray);
//     return this.cookiesPerHourArray;
//   },
//   render: function() {//This function called render on page is what will populate and where.
//     var ul = document.getElementById('pikePlace');
//     for( var index = 0; index < 8; index++) {
//       var li = document.createElement('li');
//       //console.log(dailyTotal);
//       li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
//       ul.appendChild(li);
//     }
//     var li2 = document.createElement('li2');
//     li2.textContent = this.dailyTotal + ' ' + 'total cookies';
//     ul.appendChild(li2);
//   }
// };
// //calling the cookiesPerHour function and the render function
// pikePlace.customersPerHour();
// pikePlace.calCookiesPerHour();
// pikePlace.render();
//
// //Object an literal for this location with seven properties.
// var seaTacAirport = {
//   minCustomer: 6,
//   maxCustomer: 24,
//   aveCookiesPerSale: 1.2,
//   dailyTotal: 0,
//   cookiesPerHourArray: [],
//   customersPerHour: function() {
//     //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
//     return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
//     //console.log(customersPerHour());
//   },
//   //used a for loop inside of a function to loop through the hourly array.
//   calCookiesPerHour: function() {
//     var total = 0;
//     for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
//       var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
//       this.cookiesPerHourArray.push(cookiesSold);
//       this.dailyTotal += cookiesSold;
//       console.log(this.cookiesPerHourArray);
//     }
//     //console.log(hourlyArray);
//     return this.cookiesPerHourArray;
//   },
//   render: function() {//This function called render on page is what will populate and where.
//     var ul = document.getElementById('seaTacAirport');
//     for( var index = 0; index < 8; index++) {
//       var li = document.createElement('li');
//       li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
//       ul.appendChild(li);
//     }
//     var li2 = document.createElement('li2');
//     li2.textContent = this.dailyTotal + ' ' + 'total cookies';
//     ul.appendChild(li2);
//   }
// };
// //calling the cookiesPerHour function and the render function
// seaTacAirport.calCookiesPerHour();
// seaTacAirport.render();
//
// //Object an literal for this location with seven properties.
// var southCenter = {
//   minCustomer: 6,
//   maxCustomer: 24,
//   aveCookiesPerSale: 1.2,
//   dailyTotal: 0,
//   cookiesPerHourArray: [],
//   customersPerHour: function() {
//     //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
//     return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
//     //console.log(customersPerHour());
//   },
//   //used a for loop inside of a function to loop through the hourly array.
//   calCookiesPerHour: function() {
//     var total = 0;
//     for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
//       var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
//       this.cookiesPerHourArray.push(cookiesSold);
//       this.dailyTotal += cookiesSold;
//       console.log(this.cookiesPerHourArray);
//     }
//     //console.log(hourlyArray);
//     return this.cookiesPerHourArray;
//   },
//   render: function() {//This function called render on page is what will populate and where.
//     var ul = document.getElementById('southCenter');
//     for( var index = 0; index < 8; index++) {
//       var li = document.createElement('li');
//       li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
//       ul.appendChild(li);
//     }
//     var li2 = document.createElement('li2');
//     li2.textContent = this.dailyTotal + ' ' + 'total cookies';
//     ul.appendChild(li2);
//   }
// };
// //calling the cookiesPerHour function and the render function
// southCenter.calCookiesPerHour();
// southCenter.render();
//
// //Object an literal for this location with seven properties.
// var bellevueSquare = {
//   minCustomer: 6,
//   maxCustomer: 24,
//   aveCookiesPerSale: 1.2,
//   dailyTotal: 0,
//   cookiesPerHourArray: [],
//   customersPerHour: function() {
//     //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
//     return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
//     //console.log(customersPerHour());
//   },
//   //used a for loop inside of a function to loop through the hourly array.
//   calCookiesPerHour: function() {
//     var total = 0;
//     for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
//       var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
//       this.cookiesPerHourArray.push(cookiesSold);
//       this.dailyTotal += cookiesSold;
//       console.log(this.cookiesPerHourArray);
//     }
//     //console.log(hourlyArray);
//     return this.cookiesPerHourArray;
//   },
//   render: function() {//This function called render on page is what will populate and where.
//     var ul = document.getElementById('bellevueSquare');
//     for( var index = 0; index < 8; index++) {
//       var li = document.createElement('li');
//       li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
//       ul.appendChild(li);
//     }
//     var li2 = document.createElement('li2');
//     li2.textContent = this.dailyTotal + ' ' + 'total cookies';
//     ul.appendChild(li2);
//   }
// };
// //calling the cookiesPerHour function and the render function
// bellevueSquare.calCookiesPerHour();
// bellevueSquare.render();
//
// //Object an literal for this location with seven properties.
// var alki = {
//   minCustomer: 6,
//   maxCustomer: 24,
//   aveCookiesPerSale: 1.2,
//   dailyTotal: 0,
//   cookiesPerHourArray: [],
//   customersPerHour: function() {
//     //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
//     return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
//     //console.log(customersPerHour());
//   },
//   //used a for loop inside of a function to loop through the hourly array.
//   calCookiesPerHour: function() {
//     var total = 0;
//     for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
//       var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
//       this.cookiesPerHourArray.push(cookiesSold);
//       this.dailyTotal += cookiesSold;
//       console.log(this.cookiesPerHourArray);
//     }
//     //console.log(hourlyArray);
//     return this.cookiesPerHourArray;
//   },
//   render: function() {//This function called render on page is what will populate and where.
//     var ul = document.getElementById('alki');
//     for( var index = 0; index < 8; index++) {
//       var li = document.createElement('li');
//       li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
//       ul.appendChild(li);
//     }
//     var li2 = document.createElement('li2');
//     li2.textContent = this.dailyTotal + ' ' + 'total cookies';
//     ul.appendChild(li2);
//   }
// };
// //calling the cookiesPerHour function and the render function
// alki.calCookiesPerHour();
// alki.render();
