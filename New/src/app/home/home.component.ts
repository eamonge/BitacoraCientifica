import { Component, OnInit } from '@angular/core';
import { AuthService } from '../ServiciosAPI/Services/auth.service';
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

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
