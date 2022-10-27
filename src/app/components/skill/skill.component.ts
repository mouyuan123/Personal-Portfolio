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
    'skill': `HTML, CSS, Bootstrap`,
    'percentage': `80`
    },
    {
      'skill': `Javascript, Typescript`,
      'percentage': `70`
    },
    {
      'skill': `Angular, PrimeNg, Angular Material`,
      'percentage': `70`
    },
    {
      'skill': `PHP + MySQL`,
      'percentage': `70`
    },
    {
      'skill': `Java`,
      'percentage': `80`
    },
    {
      'skill': `Python`,
      'percentage': `70`
    },
    {
      'skill': `Wix`,
      'percentage': `80`
    },
    {
      'skill': `Android Studio`,
      'percentage': `50`
    },
    {
      'skill': `Angular + Firebase`,
      'percentage': `80`
    },
    {
      'skill': `Github`,
      'percentage': `80`
    },
  ]

  constructor(private waypoint: WayPointService) { }

  ngOnInit(): void {
    this.waypoint.skillsAnimation();
  }

}
