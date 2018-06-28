import { CustomersComponent } from './customers/customers.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'DashBoard', component: DashBoardComponent, pathMatch: 'full' },
  { path: 'Customers', component: CustomersComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'DashBoard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
