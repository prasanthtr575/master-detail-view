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
    "name":"HTML",
    "color":"#FFFFFF",
    "bgColor":"#E44D26"
  },{
    "logo":"https://s3-us-west-2.amazonaws.com/svgporn.com/logos/css-3.svg",
    "name":"CSS",
    "color":"#FFFFFF",
    "bgColor":"#264DE4"
  },{
    "logo":"https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg",
    "name":"JavaScript",
    "color":"#000000  ",
    "bgColor":"#F7DF1E"
  },{
    "logo":"https://s3-us-west-2.amazonaws.com/svgporn.com/logos/angular-icon.svg",
    "name":"Angular",
    "color":"#FFFFFF",
    "bgColor":"#E23237"
  }];

  tech = this.techArr[0];

  onSelect (item) {
    this.tech = item;
  }
}
