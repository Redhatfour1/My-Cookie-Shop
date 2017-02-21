'use strict';
var storeArrays = [];

function Cookieshop(place, min, max, avgDonutsPerCust){
  this.place = place;//location
  this.min = min;//min # of customers per hr
  this.max = max;//max
  this.avgCookiesPerCust = avgDonutsPerCust;//avg donut sale per hr
  this.hourlySale = [];//store indi hourly sale value
  this.dailyTotal = 0;
  storeArrays.push(this);
  this.render();
}

//1) Generate randome # of customers between minCustPerhr and maxCustPerhr
Cookieshop.prototype.hrlyCust = function(){
  return Math.floor(Math.random() * ((this.max - this.min + 1)) + this.min);
};

//2) Calculate donuts sold per hour,
Cookieshop.prototype.cookieSale = function(){
  for (var i = 0; i < 8; i++){
    var hourly = Math.floor(this.hrlyCust() * this.avgCookiesPerCust);
    this.hourlySale.push(hourly);
    this.dailyTotal += hourly;
  };
}

Cookieshop.prototype.render = function(){
  this.cookieSale();

  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = this.place;
  trElement.appendChild(tdElement);

  for(var i = 0; i < 8; i++){
    var td = document.createElement('td');
    td.textContent = this.hourlySale[i];
    trElement.appendChild(td);
  };

  var totalTdEl = document.createElement('td');
  totalTdEl.textContent = this.dailyTotal;
  trElement.appendChild(totalTdEl);

  document.getElementById('table-body').appendChild(trElement);
};

//Iinstatntiate New Donutshop Location;
new Cookieshop('Downtown', 8, 43, 4.5, 11);
new Cookieshop('Capitol Hill', 4, 37, 2, 11);
new Cookieshop('South Lake Union', 9, 23, 6.33, 11);
new Cookieshop('Wedgewood', 2, 28, 1.25, 11);
new Cookieshop('Ballard', 8, 58, 3.75, 11);


var formEl = document.getElementById('form-data');
formEl.addEventListener('submit', function(e) {
  e.preDefault();
  var location = e.target.location.value;
  var min = parseInt(e.target.min.value);
  var max = parseInt(e.target.max.value);
  var avg = parseInt(e.target.avg.value);

  new Cookieshop(location, min, max, avg);
});
