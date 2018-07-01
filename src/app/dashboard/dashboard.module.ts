import { TablesComponent } from './tables/tables.component';
import { GraphComponent } from './graph/graph.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board.component';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReportsComponent } from '../dashboard/reports/reports.component';

@NgModule({
  imports: [DashboardRoutingModule, CommonModule, MaterialModule],
  declarations: [
    DashBoardComponent,
    GraphComponent,
    TablesComponent,
    ReportsComponent

  ]
})
export class DashboardModule { }
