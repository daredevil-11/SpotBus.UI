import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'spotbus-ui';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
   }
}
