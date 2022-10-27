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
  filteredProject$: any;


constructor(private projectList: ProjectListService) { }
  

ngOnInit(): void {
  this.displayAll();
}

/**
 * When the "ALL" button is clicked
 */
displayAll(): void{
  this.allClicked = true; this.appClicked = false; this.proClicked = false; this.webClicked = false;
  this.filteredProject$ = this.projectList.getAllProjects();
}

/**
 * When the "APP" button is clicked
 */
displayApp(): void{
  this.allClicked = false; this.appClicked = true; this.proClicked = false; this.webClicked = false;
  this.filteredProject$ = this.projectList.getAppProjects();
}

/**
 * When the "PRO" button is clicked
 */
displayPro(): void{
  this.allClicked = false; this.appClicked = false; this.proClicked = true; this.webClicked = false;
  this.filteredProject$ = this.projectList.getProjects();
}

/**
 * When the "WEB" button is clicked
 */
displayWeb(): void{
  this.allClicked = false; this.appClicked = false; this.proClicked = false; this.webClicked = true;
  this.filteredProject$ = this.projectList.getWebProjects();
}
}
