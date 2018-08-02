import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  public series: any[] = [ {
    name: 'ציונים',
    data: [1, 2, 3, 4 ]
  }, {
    name: 'דירוגים',
    data: [1, 5, 3, 2, ]
  }];
  public categories: string[] = ['20/10/18', '20/09/18', '20/8/18', '20/7/18' ];
  constructor() { }

  ngOnInit() {
  }

}
