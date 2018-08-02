import { CustomersService } from './../customers/customers.service';
import { TablesComponent } from './tables/tables.component';
import { GraphComponent } from './graph/graph.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board.component';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReportsComponent } from '../dashboard/reports/reports.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [DashboardRoutingModule, CommonModule, MaterialModule, HttpClientModule],
  declarations: [
    DashBoardComponent,
    GraphComponent,
    TablesComponent,
    ReportsComponent
  ],
  providers: []
})
export class DashboardModule { }
