'use strict';
var storeArrays = [];
var times = ['10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];

function Cookieshop(nameOfLocation, min, max, avgCookiesPerCust){
  this.nameOfLocation = nameOfLocation;//location
  this.min = min;//min # of customers per hr
  this.max = max;//max # of customers per hr
  this.avgCookiesPerCust = avgCookiesPerCust;//avg cookie sale per hr
  this.hourlySale = [];//store hourly sale value
  this.dailyTotal = 0;
  // this.allStoreTotalsArray = [];
  // this.allStoreTotals = 0;
  storeArrays.push(this);
  this.render();
}

//1) Generate randome # of customers between minCustPerhr and maxCustPerhr
Cookieshop.prototype.hrlyCust = function(){
  return Math.floor(Math.random() * ((this.max - this.min + 1)) + this.min);
};

//2) Calculate cookies sold per hour,
Cookieshop.prototype.cookieSale = function(){
  for (var i = 0; i < times.length; i++){
    var hourly = Math.floor(this.hrlyCust() * this.avgCookiesPerCust);
    this.hourlySale.push(hourly);
    this.dailyTotal += hourly;
  };
};

Cookieshop.prototype.render = function(){
  this.cookieSale();

  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = this.nameOfLocation;
  trElement.appendChild(tdElement);

  for(var i = 0; i < times.length; i++){
    var td = document.createElement('td');
    td.textContent = this.hourlySale[i];
    trElement.appendChild(td);
  };

  var totalTdEl = document.createElement('td');
  totalTdEl.textContent = this.dailyTotal;
  trElement.appendChild(totalTdEl);

  document.getElementById('table-body').appendChild(trElement);

};
// var grandTotal = 0;
// var allStores = this.dailyTotal += hourly;
// grandSales.push(allStores);
// for(var i = 0; i < grandSales.length; i++){
//   grandTotal += allStores;
// }
// grandTotalTableData.textContent = grandTotal;
// document.getElementById('allStoreTatals').appendChild();

//New Cookie Shop Locations;
new Cookieshop('Pike Place', 17, 88, 5.2);
new Cookieshop('SeaTac Airport', 6, 24, 1.2);
new Cookieshop('Southcenter', 11, 38, 1.9);
new Cookieshop('Bellevue', 20, 48, 3.3);
new Cookieshop('Alki', 3, 24, 2.6);

var formEl = document.getElementById('form-data');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  var location = event.target.location.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);

  new Cookieshop(location, min, max, avg);

// clearFields(event);
});
