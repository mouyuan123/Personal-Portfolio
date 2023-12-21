import { Component, OnInit} from '@angular/core';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  // To check which <li> item is clicked 
  allClicked = true;
  appClicked = false;
  proClicked = false;
  webClicked = false;
  // Store the projects after applying the category filtering
  projects$: any;


constructor(private projectList: ProjectListService) { }
  

ngOnInit(): void {
  this.projects$ = this.projectList.getAllProjects();
}

}
