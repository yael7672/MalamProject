import { Component } from '@angular/core';
import { AppProperties } from './app-properties.interface';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientProjectYaelBanay';
  appProperties!: AppProperties;
  constructor(private appService: AppService) {
  var x = this.appService.getAppProperties()
   console.log(x);
   
  }

  ngOnInit(): void {
    this.appProperties = this.appService.getAppProperties();
  }
}
