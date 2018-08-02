import { NgModule } from '@angular/core';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import {  DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  imports: [
    GridModule,
    PDFModule ,
    ButtonsModule,
    DropDownsModule 
  ],
  exports: [
    GridModule, PDFModule, ButtonsModule,  DropDownsModule 
  ]
})
export class KendoModule { }
