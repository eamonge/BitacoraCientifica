import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  constructor(public translate:TranslateService) {
    
    translate.addLangs(['en','es','fr']);
    translate.setDefaultLang('en');
    translate.use('en')
    
  }

  OnChange(lang){
    this.translate.use(lang);
  }

  ngOnInit() {
    
  }
  

}
