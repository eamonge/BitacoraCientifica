import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../app/ServiciosAPI/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cientific-log';

  constructor(private traduccion:TranslateService,private auth:AuthService) {
    traduccion.setDefaultLang('es');
    
  }

  
}
