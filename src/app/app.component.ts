import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Technologies';

  techArr = [{
    "logo":"https://s3-us-west-2.amazonaws.com/svgporn.com/logos/html-5.svg",
    "name":"HTML"
  },{
    "logo":"https://s3-us-west-2.amazonaws.com/svgporn.com/logos/css-3.svg",
    "name":"CSS"
  },{
    "logo":"https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg",
    "name":"JavaScript"
  },{
    "logo":"https://s3-us-west-2.amazonaws.com/svgporn.com/logos/angular-icon.svg",
    "name":"Angular"
  }];

  tech = this.techArr[0];

  onSelect (item) {
    this.tech = item;
  }
}
