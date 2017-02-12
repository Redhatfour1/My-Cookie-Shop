'use strict';

var hourly = ['10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];
//Object an literal for this location with seven properties.
var pikePlace = {
  minCustomer: 17,
  maxCustomer: 88,
  aveCookiesPerSale: 5.2,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  customersPerHour: function() {
    //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
    return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
    //console.log(customersPerHour());
  },

  //used a for loop inside of a function to loop through the hourly array.
  calCookiesPerHour: function() {
    for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
      var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
      this.cookiesPerHourArray.push(cookiesSold);
      this.dailyTotal += cookiesSold;
      console.log(this.cookiesPerHourArray);
    }
    //console.log(hourlyArray);
    return this.cookiesPerHourArray;
  },
  render: function() {//This function called render on page is what will populate and where.
    var ul = document.getElementById('pikePlace');
    for( var index = 0; index < 8; index++) {
      var li = document.createElement('li');
      //console.log(dailyTotal);
      li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
      ul.appendChild(li);
    }
    var li2 = document.createElement('li2');
    li2.textContent = this.dailyTotal + ' ' + 'total cookies';
    ul.appendChild(li2);
  }
};
//calling the cookiesPerHour function and the render function
pikePlace.customersPerHour();
pikePlace.calCookiesPerHour();
pikePlace.render();

//Object an literal for this location with seven properties.
var seaTacAirport = {
  minCustomer: 6,
  maxCustomer: 24,
  aveCookiesPerSale: 1.2,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  customersPerHour: function() {
    //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
    return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
    //console.log(customersPerHour());
  },
  //used a for loop inside of a function to loop through the hourly array.
  calCookiesPerHour: function() {
    var total = 0;
    for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
      var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
      this.cookiesPerHourArray.push(cookiesSold);
      this.dailyTotal += cookiesSold;
      console.log(this.cookiesPerHourArray);
    }
    //console.log(hourlyArray);
    return this.cookiesPerHourArray;
  },
  render: function() {//This function called render on page is what will populate and where.
    var ul = document.getElementById('seaTacAirport');
    for( var index = 0; index < 8; index++) {
      var li = document.createElement('li');
      li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
      ul.appendChild(li);
    }
    var li2 = document.createElement('li2');
    li2.textContent = this.dailyTotal + ' ' + 'total cookies';
    ul.appendChild(li2);
  }
};
//calling the cookiesPerHour function and the render function
seaTacAirport.calCookiesPerHour();
seaTacAirport.render();

//Object an literal for this location with seven properties.
var southCenter = {
  minCustomer: 6,
  maxCustomer: 24,
  aveCookiesPerSale: 1.2,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  customersPerHour: function() {
    //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
    return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
    //console.log(customersPerHour());
  },
  //used a for loop inside of a function to loop through the hourly array.
  calCookiesPerHour: function() {
    var total = 0;
    for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
      var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
      this.cookiesPerHourArray.push(cookiesSold);
      this.dailyTotal += cookiesSold;
      console.log(this.cookiesPerHourArray);
    }
    //console.log(hourlyArray);
    return this.cookiesPerHourArray;
  },
  render: function() {//This function called render on page is what will populate and where.
    var ul = document.getElementById('southCenter');
    for( var index = 0; index < 8; index++) {
      var li = document.createElement('li');
      li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
      ul.appendChild(li);
    }
    var li2 = document.createElement('li2');
    li2.textContent = this.dailyTotal + ' ' + 'total cookies';
    ul.appendChild(li2);
  }
};
//calling the cookiesPerHour function and the render function
southCenter.calCookiesPerHour();
southCenter.render();

//Object an literal for this location with seven properties.
var bellevueSquare = {
  minCustomer: 6,
  maxCustomer: 24,
  aveCookiesPerSale: 1.2,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  customersPerHour: function() {
    //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
    return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
    //console.log(customersPerHour());
  },
  //used a for loop inside of a function to loop through the hourly array.
  calCookiesPerHour: function() {
    var total = 0;
    for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
      var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
      this.cookiesPerHourArray.push(cookiesSold);
      this.dailyTotal += cookiesSold;
      console.log(this.cookiesPerHourArray);
    }
    //console.log(hourlyArray);
    return this.cookiesPerHourArray;
  },
  render: function() {//This function called render on page is what will populate and where.
    var ul = document.getElementById('bellevueSquare');
    for( var index = 0; index < 8; index++) {
      var li = document.createElement('li');
      li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
      ul.appendChild(li);
    }
    var li2 = document.createElement('li2');
    li2.textContent = this.dailyTotal + ' ' + 'total cookies';
    ul.appendChild(li2);
  }
};
//calling the cookiesPerHour function and the render function
bellevueSquare.calCookiesPerHour();
bellevueSquare.render();

//Object an literal for this location with seven properties.
var alki = {
  minCustomer: 6,
  maxCustomer: 24,
  aveCookiesPerSale: 1.2,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  customersPerHour: function() {
    //Getting the difference of max and min and finding a random number while making sure the random number is not lower than the min.
    return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer + 1);
    //console.log(customersPerHour());
  },
  //used a for loop inside of a function to loop through the hourly array.
  calCookiesPerHour: function() {
    var total = 0;
    for (var index = 0; index < hourly.length; index++) { //This gives me the number of cookies per hour.
      var cookiesSold = Math.floor(this.customersPerHour() * this.aveCookiesPerSale);
      this.cookiesPerHourArray.push(cookiesSold);
      this.dailyTotal += cookiesSold;
      console.log(this.cookiesPerHourArray);
    }
    //console.log(hourlyArray);
    return this.cookiesPerHourArray;
  },
  render: function() {//This function called render on page is what will populate and where.
    var ul = document.getElementById('alki');
    for( var index = 0; index < 8; index++) {
      var li = document.createElement('li');
      li.textContent = hourly[index] + ' ' + this.cookiesPerHourArray[index] + ' cookies';
      ul.appendChild(li);
    }
    var li2 = document.createElement('li2');
    li2.textContent = this.dailyTotal + ' ' + 'total cookies';
    ul.appendChild(li2);
  }
};
//calling the cookiesPerHour function and the render function
alki.calCookiesPerHour();
alki.render();
