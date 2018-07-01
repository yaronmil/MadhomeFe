import { CustomersComponent } from './customers/customers.component';
import { DashBoardComponent } from './dashboard/dash-board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { GraphComponent } from 'src/app/dashboard/graph/graph.component';
import { TablesComponent } from './dashboard/tables/tables.component';

const routes: Routes = [
  { path: 'Customers', component: CustomersComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'DashBoard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
