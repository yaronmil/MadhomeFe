import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public gridView: GridDataResult;
  public categories: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];
  constructor(private customersService: CustomersService) { }

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
