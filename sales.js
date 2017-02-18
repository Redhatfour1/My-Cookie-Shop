'use strict';
//Set up an array for the hours of operation.
var hourly = ['10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];
var locationsArray = ['Hourly Totals', 'Pike Place', 'SeaTac Airport', 'Southcenter', 'Bellevue Square', 'Alki', 'Daily Totals:'];
var dailyTotalRow = ['Daily Total:'];
var pikePlace = new CookieShops('Pike Place', 17, 18, 5.2);
var seaTacAirport = new CookieShops('SeaTac Airport', 6, 24, 1.2);
var southCenter = new CookieShops('South Center', 11, 38, 1.9);
var bellevueSquare = new CookieShops('Bellevue Square', 20, 48, 3.3);
var alki = new CookieShops('Alki', 3, 24, 2.6);

//This is a Object Constructor function
function CookieShops (nameOfLocation, minNumOfCustomers, maxNumOfCustomers, aveCookiesPerSale) {
  this.nameOfLocation = nameOfLocation;
  this.minNumOfCustomers = minNumOfCustomers;
  this.maxNumOfCustomers = maxNumOfCustomers;
  this.aveCookiesPerSale = aveCookiesPerSale;
  this.cookiesPerHourArray = [];
  this.randomNumOfCustomersPerHour = function() {
    return Math.random() * ((this.maxNumOfCustomers - this.minNumOfCustomers) + this.minNumOfCustomers + 1);
    console.log('Random number of customers: ' + randomNumOfCustomersPerHour);
  };
  this.numOfCookiesPerHour = function() {
  //Created an empty array to store the cookies per hour and used a for loop inside of a function to loop through the hourly array.
    for(var index = 0; index < hourly.length + 1; index++) { //This gives me the number of cookies per hour.
      var cookiesSold = Math.floor(this.randomNumOfCustomersPerHour() * this.aveCookiesPerSale);
      console.log(cookiesSold);
      this.cookiesPerHourArray.push(cookiesSold);
      this.dailyTotal += cookiesSold;
    }
    console.log('Cookies per hour: ' + cookiesSold);
    return cookiesSold;
  };
  this.cookiesPerHourData = function() {
    //console.log('cookies sold: ');
    var arrayData = this.numOfCookiesPerHour();
    var data = 0;
    for(var index = 0; index < arrayData.length; index++) {
      data += arrayData[index];
    }
    arrayData.push(data);
    console.log(arrayData);
    return arrayData;
  };
  this.locations = function() {
    var locationsRow = document.getElementById('nameOfLocation');
    var thElement = document.createElement('th');
    thElement.textContent = this.nameOfLocation;
    locationsRow.appendChild(thElement);
    console.log(nameOfLocation);
  };
  this.renderTable = function() {
    var totalsArray = this.cookiesPerHourData();
    console.log(totalsArray);
    for(var index = 0; index < totalsArray.length; index++) {
      var totalsRow = document.getElementById('totals');
      var thElement = document.createElement('th');
      thElement.textContent = this.totalsArray[index];
      totalsRow.appendChild(thElement);
    }

  };
  // var dailyTotalListItem = document.createElement('li');
  // listElement.textContent = 'Daily total: ' + dailyTotal + ' cookies';
  // return hourlyArray;
};

// var pikePlaceArray = cookiesSold(pikePlace);
// var seaTacAirportArray = cookiesSold(seaTacAirport);
// var southCenterArray = cookiesSold(southCenter);
// var bellevueSquareArray = cookiesSold(bellevueSquare);
// var alkiArray = cookiesSold(alki);

// var tableData = [hourly, pikePlace, seaTacAirport, southCenter, bellevueSquare, alki, dailyTotalRow];
// console.log('Table data: ' + tableData);
//
// var tableElement = document.getElementById('tableData');
// console.log('Table element: ' + tableElement);
//
// for(var index = 0; index < tableData.length; index++) {
//   var rowData = tableData[index];
//   console.log('Row data: ' + rowData);
//
//   var rowElement = document.createElement('tr');
//   console.log('Row element: ' + rowElement);
//
//   for(var i = 0; i < rowData.length; i++) {
//     var rowContent = rowData[i];
//     console.log('Row content: ' + rowContent);
//
//     var dataElement = document.createElement('tr');
//     dataElement.textContent = rowContent;
//     rowElement.appendChild(dataElement);
//   }
//   tableElement.appendChild(rowElement);
// }
pikePlace.locations();
pikePlace.renderTable();
seaTacAirport.locations();
seaTacAirport.renderTable();
southCenter.locations();
southCenter.renderTable();
bellevueSquare.locations();
bellevueSquare.renderTable();
alki.locations();
alki.renderTable();

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
