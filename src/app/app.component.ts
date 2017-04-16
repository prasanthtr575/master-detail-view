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
  },{
    "logo":"https://s3-us-west-2.amazonaws.com/svgporn.com/logos/react.svg",
    "name":"React",
    "color":"#000000",
    "bgColor":"#00D8FF"
  },{
    "logo":"https://s3-us-west-2.amazonaws.com/svgporn.com/logos/backbone-icon.svg",
    "name":"Backbone",
    "color":"#FFFFFF",
    "bgColor":"#0071B5"
  },{
    "logo":"https://s3-us-west-2.amazonaws.com/svgporn.com/logos/vue.svg",
    "name":"Vue",
    "color":"#FFFFFF",
    "bgColor":"#41B883"
  }];

  tech = this.techArr[0];

  onSelect (item) {
    this.tech = item;
  }
}
