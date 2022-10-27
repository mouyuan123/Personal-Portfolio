import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectListService } from 'src/app/services/project-list.service';

@NgModule({
  declarations: [
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ReactiveFormsModule,
  ],
  // Services here
  providers: [ProjectListService],
})
export class PortfolioModule { }
