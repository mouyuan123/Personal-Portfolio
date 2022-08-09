import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { AddProjectFormComponent } from 'src/app/components/add-project-form/add-project-form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PortfolioComponent,
    AddProjectFormComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ReactiveFormsModule,

  ]
})
export class PortfolioModule { }
