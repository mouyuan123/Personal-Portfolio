import { Component, OnInit} from '@angular/core';
import { WayPointService } from 'src/app/services/way-point.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills: any[] = 
  [
    {
      'skill': `Angular + Node.js + Express.js + MongoDB`,
      'percentage': `85`
    },
    {
      'skill': `Spring Boot + JPA + Thymeleaf + MySQL + Ajax`,
      'percentage': `70`
    },
    {
      'skill': `Angular + ASP.NET + SQL Server`,
      'percentage': `70`
    },
    {
      'skill': `ML (Standard Scaling, PCA, SMOTE, MLP)`,
      'percentage': `75`
    },
    {
    'skill': `Angular + PrimeNG`,
    'percentage': `80`
    },
    {
      'skill': `Firebase`,
      'percentage': `60`
    },
    {
      'skill': `Java, Javascript, Typescript`,
      'percentage': `75`
    },
    {
      'skill': `Python, PHP`,
      'percentage': `60`
    },
  ]

  constructor(private waypoint: WayPointService) { }

  ngOnInit(): void {
    this.waypoint.skillsAnimation();
  }

}
