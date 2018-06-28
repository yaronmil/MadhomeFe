import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [{
    name: 'דש בורד',
    icon: 'dashboard',
    url: 'DashBoard'
  },
  {
    name: 'ניהול לקוחות',
    icon: 'list',
    url: 'Customers'
  }
  ];
}
