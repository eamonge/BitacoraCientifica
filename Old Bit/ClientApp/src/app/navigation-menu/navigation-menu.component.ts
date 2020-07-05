import { Component, OnInit } from '@angular/core';

function Test() {

  var TimeDisplay = document.getElementById('Time');
  var DateDisplay = document.getElementById('Date');

  function displayDate(date) {
    // gets the hours
    var hours = date.getHours();
    // gets the day
    var days = date.getDay();
    // gets the month
    var minutes = date.getMinutes();
    // gets AM/PM
    var ampm = hours >= 12 ? 'pm' : 'am';
    // converts hours to 12 hour instead of 24 hour
    hours = hours % 12;
    // converts 0 (midnight) to 12
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // converts minutes to have leading 0
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // the time string
    var time = hours + ':' + minutes + ' ' + ampm;

    // gets the match for the date string we want
    var match = date.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/);

    //the result
    return match[0];
  }

  function displayTime(date) {
    // gets the hours
    var hours = date.getHours();
    // gets the day
    var days = date.getDay();
    // gets the month
    var minutes = date.getMinutes();
    // gets AM/PM
    var ampm = hours >= 12 ? 'pm' : 'am';
    // converts hours to 12 hour instead of 24 hour
    hours = hours % 12;
    // converts 0 (midnight) to 12
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // converts minutes to have leading 0
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // the time string
    var time = hours + ':' + minutes + ' ' + ampm;

    // gets the match for the date string we want
    var match = date.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/);

    //the result
    return time;
  }

  TimeDisplay.innerHTML = displayDate(new Date());
  DateDisplay.innerHTML = displayTime(new Date());

  //var test = document.getElementById('BTNTEST');

  //test.addEventListener('click', hey);

  //function hey() {
  //  alert('click works!');
  //}

}



@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Test();
  }

}
