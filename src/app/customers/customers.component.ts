import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from './customers.service';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { MatSidenav } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @ViewChild(MatSidenav)
  public customersTabSideNav: MatSidenav;

  public gridView: GridDataResult;
  public showCustomerDetails = false;
  public showAdvancedSearch = true;
  public categories: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];
  constructor(private customersService: CustomersService) { }
  popCustomerDetails() {
    this.showAdvancedSearch = false;
    this.showCustomerDetails = true;
    this.customersTabSideNav.open();
  }
  popAdvancedSearch() {
    this.customersTabSideNav.mode = 'side';
    this.showAdvancedSearch = true;
    this.showCustomerDetails = false;
    this.customersTabSideNav.open();
  }
  ngOnInit() {
    this.customersService.loadCustomers().subscribe(data => {
      const newData = <any[]>data;
      this.gridView = {
        data: newData,
        total: newData.length
      };

    });
  }

}
