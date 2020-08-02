import { Component, OnInit } from '@angular/core';
declare const HideMenu:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Hide() {
    HideMenu();
  }

  constructor() { }

  ngOnInit(): void {
  }

}