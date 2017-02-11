'use strict';

var hourly = ['10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];

var pikePlace = {
  minCustomer: 17,
  maxCustomer: 88,
  aveCookiesPerSale: 5.2,
  totalCookiesPerDay: [],
  customersPerHour: function {
//Getting the difference of max and min and finding a random number.
    return Math.random() * ((this.maxCustomer - this.minCustomer) + this.minCustomer);
    console.log(customersPerHour());
},
  //This gives me the number of cookies per hour.
  cookiesPerHour: function() {
    for (var index = 0; index < 8; index++) {
      this.totalCookiesPerDay.push(Math.floor(this.cookiesPerHour() * this.aveCookiesPerSale));
      console.log(cookiesPerHour());
    }
    return this.totalCookiesPerDay;
  },
  render: function() {
    var parent = document.getElementById('pikePlace');
    var child = document.createElement('li');
    child.textContent = 'total cookies per day';
    parent.appendChild(li);
  }
};

cookiesPerHour();
render();
