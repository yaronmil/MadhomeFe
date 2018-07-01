import { DashBoardComponent } from './dash-board.component';
import { GraphComponent } from './graph/graph.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: 'DashBoard',
    component: DashBoardComponent,
    children: [
      { path: 'Graph', component: GraphComponent, pathMatch: 'full' },
      { path: 'Tables', component: TablesComponent, pathMatch: 'full' },
      { path: 'Reports', component: ReportsComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'Graph', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
