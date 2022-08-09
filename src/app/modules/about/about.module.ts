import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SkillComponent } from '../../components/skill/skill.component';
import { FactComponent } from '../../components/fact/fact.component';


@NgModule({
  declarations: [
    AboutComponent,
    SkillComponent,
    FactComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
