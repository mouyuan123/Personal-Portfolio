import { Component, OnInit} from '@angular/core';
import { WayPointService } from 'src/app/services/way-point.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(private waypoint: WayPointService) { }

  ngOnInit(): void {
    this.waypoint.skillsAnimation();
  }

}
