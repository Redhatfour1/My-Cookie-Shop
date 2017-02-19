// 'use strict';
// //Set up an array for the hours of operation.
// var hourly = ['10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];
// var locationsArray = ['', 'Pike Place', 'SeaTac Airport', 'Southcenter', 'Bellevue Square', 'Alki', 'Daily Totals:'];
//
//
// function renderTableHeader() {
//   var hourlyRow = document.getElementById('salesTable');
//   for(var index = 0; index < hourly.length; index++) {
//     var thElement = document.createElement('th');
//     thElement.textContent = hourly[index];
//     hourlyRow.appendChild(thElement);
//   }
// }
//
// function column(){
//   for(var index = 0; index < locationsArray.length; index++) {
//     console.log('index', locationsArray[index]);
//
//     var locationsHeader = document.getElementById('locations');
//     var trElement = document.createElement('tr');
//     var th = document.createElement('th');
//     th.textContent = locationsArray[index];
//     locationsHeader.appendChild(th);
//   }
//   // var table = document.getElementById('locations');
//   // table.appendChild(trElement);
// };
//
// //This is a Object Constructor function
// function CookieShops (nameOfLocation, minNumOfCustomers, maxNumOfCustomers, aveCookiesPerSale) {
//   this.nameOfLocation = nameOfLocation;
//   this.minNumOfCustomers = minNumOfCustomers;
//   this.maxNumOfCustomers = maxNumOfCustomers;
//   this.aveCookiesPerSale = aveCookiesPerSale;
//   this.cookiesPerHourArray = [];
//   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~");
//   this.randomNumOfCustomersPerHour = function() {
//     return Math.random() * ((this.maxNumOfCustomers - this.minNumOfCustomers) + this.minNumOfCustomers + 1);
//     console.log('Random number of customers: ' + randomNumOfCustomersPerHour);
//   };
//   this.numOfCookiesPerHour = function() {
//   //Created an empty array to store the cookies per hour and used a for loop inside of a function to loop through the hourly array.
//     for(var index = 0; index < hourly.length + 1; index++) { //This gives me the number of cookies per hour.
//       var cookiesSold = Math.floor(this.randomNumOfCustomersPerHour() * this.aveCookiesPerSale);
//       console.log(cookiesSold);
//       this.cookiesPerHourArray.push(cookiesSold);
//       this.dailyTotal += cookiesSold;
//     }
//     console.log('Cookies per hour: ' + cookiesSold);
//     return cookiesSold;
//   };
//   this.cookiesPerHourData = function() {
//     //console.log('cookies sold: ');
//     var data = this.numOfCookiesPerHour();
//     console.log(data);
//
//     this.cookiesPerHourArray.push(data);
//     console.log(this.cookiesPerHourArray);
//     return this.cookiesPerHourArray;
//     // console.log(arrayData);
//     // return arrayData;
//   };
//   // this.locations = function() {
//   //   for(var index = 0; index < locationsArray.length; index++) {
//   //     var locationsRow = document.getElementById('salesTable');
//   //     var thElement = document.createElement('tr');
//   //     thElement.textContent = this.locationsArray;
//   //     locationsRow.appendChild(thElement);
//   //     console.log(locationsArray);
//   //   }
//   // };
//   this.renderAsRow = function() {
//     var totalsArray = this.cookiesPerHourData();
//     var trElement = document.createElement('tr');
//     for(var index = 0; index < totalsArray.length; index++) {
//       var td = document.createElement('td');
//       td.textContent = totalsArray[index];
//       trElement.appendChild(td);
//     }
//     var table = document.getElementById('salesTable');
//     table.appendChild(trElement);
//   };
// };
//
// // var pikePlaceArray = cookiesSold(pikePlace);
// // var seaTacAirportArray = cookiesSold(seaTacAirport);
// // var southCenterArray = cookiesSold(southCenter);
// // var bellevueSquareArray = cookiesSold(bellevueSquare);
// // var alkiArray = cookiesSold(alki);
//
// // var tableData = [hourly, pikePlace, seaTacAirport, southCenter, bellevueSquare, alki, dailyTotalRow];
// // console.log('Table data: ' + tableData);
// //
// // var tableElement = document.getElementById('tableData');
// // console.log('Table element: ' + tableElement);
// //
// // for(var index = 0; index < tableData.length; index++) {
// //   var rowData = tableData[index];
// //   console.log('Row data: ' + rowData);
// //
// //   var rowElement = document.createElement('tr');
// //   console.log('Row element: ' + rowElement);
// //
// //   for(var i = 0; i < rowData.length; i++) {
// //     var rowContent = rowData[i];
// //     console.log('Row content: ' + rowContent);
// //
// //     var dataElement = document.createElement('tr');
// //     dataElement.textContent = rowContent;
// //     rowElement.appendChild(dataElement);
// //   }
// //   tableElement.appendChild(rowElement);
// // }
// renderTableHeader();
// column();
// pikePlace.renderAsRow();
// southCenter.renderAsRow();
// bellevueSquare.renderAsRow();
// alki.renderAsRow();
//
// /* TODO WHERE WE LEFT OFF
// pikePlace.locations();
// pikePlace.renderTable();
// seaTacAirport.locations();
// seaTacAirport.renderTable();
// southCenter.locations();
// southCenter.renderTable();
// bellevueSquare.locations();
// bellevueSquare.renderTable();
// alki.locations();
// alki.renderTable();
// */
//
// // Object an literal for this location with seven properties.
// // var pikePlace = {
// //   minCustomer: 17,
// //   maxCustomer: 88,
// //   aveCookiesPerSale: 5.2,
// //   dailyTotal: 0,
// //   cookiesPerHourArray: [],
// //   customersPerHour: function() {
// //     //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
// //
// //   },
// //
// //
// //   : function() {
// //     for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
// //       var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
// //       this.cookiesPerHourArray.push(cookiesSold);
// //       this.dailyTotal += cookiesSold;
// //       console.log(this.cookiesPerHourArray);
// //     }
// //     //console.log(hourlyArray);
// //     return this.cookiesPerHourArray;
// //   },
// //   render: function() {//This function called render on page is what will populate and where.
// //     var ul = document.getElementById('pikePlace');
// //     for( var index = 0; index < 8; index++) {
// //       var li = document.createElement('li');
// //       //console.log(dailyTotal);
// //       li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
// //       ul.appendChild(li);
// //     }
// //     var li2 = document.createElement('li2');
// //     li2.textContent = this.dailyTotal + ' ' + 'total cookies';
// //     ul.appendChild(li2);
// //   }
// // };
// // //calling the cookiesPerHour function and the render function
// // pikePlace.customersPerHour();
// // pikePlace.calCookiesPerHour();
// // pikePlace.render();
// //
// // //Object an literal for this location with seven properties.
// // var seaTacAirport = {
// //   minCustomer: 6,
// //   maxCustomer: 24,
// //   aveCookiesPerSale: 1.2,
// //   dailyTotal: 0,
// //   cookiesPerHourArray: [],
// //   customersPerHour: function() {
// //     //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
// //     return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
// //     //console.log(customersPerHour());
// //   },
// //   //used a for loop inside of a function to loop through the hourly array.
// //   calCookiesPerHour: function() {
// //     var total = 0;
// //     for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
// //       var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
// //       this.cookiesPerHourArray.push(cookiesSold);
// //       this.dailyTotal += cookiesSold;
// //       console.log(this.cookiesPerHourArray);
// //     }
// //     //console.log(hourlyArray);
// //     return this.cookiesPerHourArray;
// //   },
// //   render: function() {//This function called render on page is what will populate and where.
// //     var ul = document.getElementById('seaTacAirport');
// //     for( var index = 0; index < 8; index++) {
// //       var li = document.createElement('li');
// //       li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
// //       ul.appendChild(li);
// //     }
// //     var li2 = document.createElement('li2');
// //     li2.textContent = this.dailyTotal + ' ' + 'total cookies';
// //     ul.appendChild(li2);
// //   }
// // };
// // //calling the cookiesPerHour function and the render function
// // seaTacAirport.calCookiesPerHour();
// // seaTacAirport.render();
// //
// // //Object an literal for this location with seven properties.
// // var southCenter = {
// //   minCustomer: 6,
// //   maxCustomer: 24,
// //   aveCookiesPerSale: 1.2,
// //   dailyTotal: 0,
// //   cookiesPerHourArray: [],
// //   customersPerHour: function() {
// //     //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
// //     return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
// //     //console.log(customersPerHour());
// //   },
// //   //used a for loop inside of a function to loop through the hourly array.
// //   calCookiesPerHour: function() {
// //     var total = 0;
// //     for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
// //       var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
// //       this.cookiesPerHourArray.push(cookiesSold);
// //       this.dailyTotal += cookiesSold;
// //       console.log(this.cookiesPerHourArray);
// //     }
// //     //console.log(hourlyArray);
// //     return this.cookiesPerHourArray;
// //   },
// //   render: function() {//This function called render on page is what will populate and where.
// //     var ul = document.getElementById('southCenter');
// //     for( var index = 0; index < 8; index++) {
// //       var li = document.createElement('li');
// //       li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
// //       ul.appendChild(li);
// //     }
// //     var li2 = document.createElement('li2');
// //     li2.textContent = this.dailyTotal + ' ' + 'total cookies';
// //     ul.appendChild(li2);
// //   }
// // };
// // //calling the cookiesPerHour function and the render function
// // southCenter.calCookiesPerHour();
// // southCenter.render();
// //
// // //Object an literal for this location with seven properties.
// // var bellevueSquare = {
// //   minCustomer: 6,
// //   maxCustomer: 24,
// //   aveCookiesPerSale: 1.2,
// //   dailyTotal: 0,
// //   cookiesPerHourArray: [],
// //   customersPerHour: function() {
// //     //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
// //     return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
// //     //console.log(customersPerHour());
// //   },
// //   //used a for loop inside of a function to loop through the hourly array.
// //   calCookiesPerHour: function() {
// //     var total = 0;
// //     for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
// //       var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
// //       this.cookiesPerHourArray.push(cookiesSold);
// //       this.dailyTotal += cookiesSold;
// //       console.log(this.cookiesPerHourArray);
// //     }
// //     //console.log(hourlyArray);
// //     return this.cookiesPerHourArray;
// //   },
// //   render: function() {//This function called render on page is what will populate and where.
// //     var ul = document.getElementById('bellevueSquare');
// //     for( var index = 0; index < 8; index++) {
// //       var li = document.createElement('li');
// //       li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
// //       ul.appendChild(li);
// //     }
// //     var li2 = document.createElement('li2');
// //     li2.textContent = this.dailyTotal + ' ' + 'total cookies';
// //     ul.appendChild(li2);
// //   }
// // };
// // //calling the cookiesPerHour function and the render function
// // bellevueSquare.calCookiesPerHour();
// // bellevueSquare.render();
// //
// // //Object an literal for this location with seven properties.
// // var alki = {
// //   minCustomer: 6,
// //   maxCustomer: 24,
// //   aveCookiesPerSale: 1.2,
// //   dailyTotal: 0,
// //   cookiesPerHourArray: [],
// //   customersPerHour: function() {
// //     //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
// //     return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
// //     //console.log(customersPerHour());
// //   },
// //   //used a for loop inside of a function to loop through the hourly array.
// //   calCookiesPerHour: function() {
// //     var total = 0;
// //     for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
// //       var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
// //       this.cookiesPerHourArray.push(cookiesSold);
// //       this.dailyTotal += cookiesSold;
// //       console.log(this.cookiesPerHourArray);
// //     }
// //     //console.log(hourlyArray);
// //     return this.cookiesPerHourArray;
// //   },
// //   render: function() {//This function called render on page is what will populate and where.
// //     var ul = document.getElementById('alki');
// //     for( var index = 0; index < 8; index++) {
// //       var li = document.createElement('li');
// //       li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
// //       ul.appendChild(li);
// //     }
// //     var li2 = document.createElement('li2');
// //     li2.textContent = this.dailyTotal + ' ' + 'total cookies';
// //     ul.appendChild(li2);
// //   }
// // };
// // //calling the cookiesPerHour function and the render function
// // alki.calCookiesPerHour();
// // alki.render();
//
// function CookieShops(location, min, max, avgCookiesPerSale){
//   this.location = location;
//   this.min = min;
//   this.max = max;
//   this.avgCookiesPerSale = avgCookiesPerSale;
//   this.cookiesPerHourArray = [];
//   this.dailyTotal = [];
//
//   this.randomNumOfCustomersPerHour = function(){
//     return Math.floor(Math.random() * (this.max - this.min) + (this.min));
//   };
//
//   this.calCookiesPerHour = function(){
//     for (index = 0; index < 8; index++){
//       numOfCookiesPerHour = Math.floor(this.randomNumOfCustomersPerHour() * this.avgCookiesPerSale);
//       this.cookiesPerHourArray.push(numOfCookiesPerHour);
//     }
//   };
//
//   total = 0;
//
//   this.dailyFinal = function(){
//     for (index = 0; index < 8; index++){
//       total += this.cookiesPerHourArray;
//     };
//     this.dailyTotal.push(total);
//   };
//
//   this.renderAsRow = function(){
//     var cookieTable = document.getElementById(salesTable);
//     var trEl = document.createElement('tr');
//     var locationName = document.createElement('td');
//
//     locationName.textContent = this.location;
//     trEl.appendChild(locationName);
//     cookieTable.appendChild(trEl);
//     this.calCookiesPerHour;
//
//     var total = document.createElement('td');
//     total.textContent = this.dailyTotal;
//     trEl.appendChild(total);
//     cookieTable.appendChild(trEl);
//   };
// };
//
// // var dailyTotalRow = ['Daily Total:'];
// var pikePlace = new CookieShops('Pike Place', 17, 18, 5.2);
// var seaTacAirport = new CookieShops('SeaTac Airport', 6, 24, 1.2);
// var southCenter = new CookieShops('South Center', 11, 38, 1.9);
// var bellevueSquare = new CookieShops('Bellevue Square', 20, 48, 3.3);
// var alki = new CookieShops('Alki', 3, 24, 2.6);
//
// console.log(pikePlace.calCookiesPerHour());
// console.log(pikePlace.dailyFinal());
// console.log(pikePlace.renderAsRow());
// pikePlace.renderAsRow();

function Cookieshop(place,min,max,avgDonutsPerCust){
  this.place = place;//location
  this.min = min;//min # of customers per hr
  this.max = max;//max
  this.avgCookiesPerCust = avgDonutsPerCust;//avg donut sale per hr
  this.hourlySale = [];//store indi hourly sale value
  this.dailyTotal = [];
  //this.total = [];

//1) Generate randome # of customers between minCustPerhr and maxCustPerhr

  this.hrlyCust = function(){
    return Math.floor(Math.random() * ((this.max - this.min)) + this.min);
  };

//2) Calculate donuts sold per hour,
  this.cookieSale = function(){

    for (i = 0; i < 8; i++){
      hourly = Math.floor(this.hrlyCust() * this.avgCookiesPerCust);
      this.hourlySale.push(hourly);
    };

//3) Calculate total donuts sold per day
    total = 0;

    this.dailyFinal = function(){
      for (i = 0; i < 8; i++){
        total += this.hourlySale[i];
      };
      this.dailyTotal.push(total);
    };
  };
};

//Iinstatntiate New Donutshop Location;
var pikePlace = new Cookieshop ('Downtown', 8, 43, 4.5, 11);
var seaTacAirport = new Cookieshop ('Capitol Hill', 4, 37, 2, 11);
var southCenter = new Cookieshop ('South Lake Union', 9, 23, 6.33, 11);
var bellevueSquare = new Cookieshop ('Wedgewood', 2, 28, 1.25, 11);
var alki = new Cookieshop ('Ballard', 8, 58, 3.75, 11);

Cookieshop.prototype.render = function(){

  //var tableElement = document.createElement(tableElement);

  var trElement = document.createElement('tr');

  var tdElement = document.createElement('td');

  tdElement.innerHTML = this.total;
  tdElement.innerHTML = this.place;
  trElement.appendChild(tdElement);

  for(var i = 0; i < 8; i++){
    td = document.createElement('td');
    td.innerHTML = this.hourlySale[i];
    trElement.appendChild(td);

  };
  td = document.createElement('td');
  td.innerHTML = this.dailyTotal;
  trElement.appendChild(td);
  body = document.getElementById('body').appendChild(trElement);

};

console.log(pikePlace.hrlyCust());
console.log(pikePlace.cookieSale());
console.log(pikePlace.dailyFinal());
console.log(pikePlace.hourlySale);
console.log(pikePlace.dailyTotal);
pikePlace.render();

console.log(seaTacAirport.hrlyCust());
console.log(seaTacAirport.cookieSale());
console.log(seaTacAirport.dailyFinal());
console.log(seaTacAirport.hourlySale);
console.log(seaTacAirport.dailyTotal);
seaTacAirport.render();

console.log(alki.hrlyCust());
console.log(alki.cookieSale());
console.log(alki.dailyFinal());
console.log(alki.hourlySale);
console.log(alki.dailyTotal);
alki.render();

console.log(southCenter.hrlyCust());
console.log(southCenter.cookieSale());
console.log(southCenter.dailyFinal());
console.log(southCenter.hourlySale);
console.log(southCenter.dailyTotal);
southCenter.render();

console.log(bellevueSquare.hrlyCust());
console.log(bellevueSquare.cookieSale());
console.log(bellevueSquare.dailyFinal());
console.log(bellevueSquare.hourlySale);
console.log(bellevueSquare.dailyTotal);
bellevueSquare.render();

var storeArrays = [];
storeArrays.push(pikePlace);
storeArrays.push(seaTacAirport);
storeArrays.push(southCenter);
storeArrays.push(bellevueSquare);
storeArrays.push(alki);

// storeArrays.push(newPlace);
