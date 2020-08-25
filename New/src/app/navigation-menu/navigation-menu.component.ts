import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../ServiciosAPI/Services/auth.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  constructor(public translate:TranslateService,public auth:AuthService) {
    
    translate.addLangs(['en','es','fr','de','it','zh']);
  
    
  }

  OnChange(lang){
    this.translate.use(lang);
  }

  ngOnInit() {
    
  }
  

}
