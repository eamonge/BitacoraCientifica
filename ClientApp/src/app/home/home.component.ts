import { Component, OnInit } from '@angular/core';





function Test() {
  var btnTest = document.getElementById('TEST');

  btnTest.addEventListener('click', function () {
    alert('Click');
  });
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {
    Test();
  }
}
