import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortfolioDetailRoutingModule } from './portfolio-detail-routing.module';
import { PortfolioDetailComponent } from './portfolio-detail.component';


@NgModule({
  declarations: [
    PortfolioDetailComponent
  ],
  imports: [
    CommonModule,
    PortfolioDetailRoutingModule,
    FormsModule
  ]
})
export class PortfolioDetailModule { }
