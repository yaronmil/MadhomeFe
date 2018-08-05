
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import 'hammerjs';
import { AppRoutingModule } from './app.routing.module';
import { CustomersComponent } from './customers/customers.component';
import { KendoModule } from './kendo/kendo.module';
import { RTL } from '@progress/kendo-angular-l10n';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { AdvancedSearchComponent } from './customers/advanced-search/advanced-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnifDetailsComponent } from './customers/advanced-search/panel-parts/snif-details/snif-details.component';
import { AccountDetailsComponent } from './customers/advanced-search/panel-parts/account-details/account-details.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailComponent,
    AdvancedSearchComponent,
    SnifDetailsComponent,
    AccountDetailsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    KendoModule,
    AppRoutingModule,
    DashboardModule,
    ChartsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [{ provide: RTL, useValue: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
