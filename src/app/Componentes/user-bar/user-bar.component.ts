import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.css']
})
export class UserBarComponent implements OnInit {

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
