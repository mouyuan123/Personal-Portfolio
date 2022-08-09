import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Project } from 'src/app/interface/projects';
import { ProjectGeneratorService } from 'src/app/services/project-generator.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  // To store the projects that need to be displayed
  projectToDisplay: Project[] = [];
  // To check which <li> item is clicked 
  allClicked = true;
  appClicked = false;
  proClicked = false;
  webClicked = false;
  // To check whether the "Add Project" button is clicked
  addProject = false;
  /**
   * To make sure "Add Project" card has the same height with the other "project" cards at different section
   */
  @ViewChild('portfolio') portfolio!: ElementRef;
  height!: number;


constructor(public pgs: ProjectGeneratorService) { }
  

ngOnInit(): void {
  this.getProjects();
}

/**
 * After the view is rendered, I will retrieve the height of the "project" card 
 * to define the height of the "Add Project" card
 */
ngAfterViewInit() {
  // setTimeout() to make sure we always retrieve the element after the web rendering our views completely
   setTimeout(() => {
    this.height = this.portfolio.nativeElement.offsetHeight;
  }, 1000);
  
}

/**
 * To retrieve the list of projects corresponding to the <li> item type
 */
getProjects(): void{
  this.pgs.getProjects().subscribe(projects => {
    // If the "APP" is clicked
    if (this.appClicked){
      this.projectToDisplay = projects.filter(project => project.projectCategory == 'App Development');
    }
    // If the "PRO" is clicked
    else if(this.proClicked){
      this.projectToDisplay = projects.filter(project => project.projectCategory == 'Project');
    }
    // If the "WEB" is clicked
    else if (this.webClicked){
      this.projectToDisplay = projects.filter(project => project.projectCategory == 'Web Development');
    }
    // If the "ALL" is clicked
    else{
      this.projectToDisplay = projects;
    }
});
}

/**
 * When the "ALL" button is clicked
 */
displayAll(): void{
  this.allClicked = true;
  this.appClicked = false;
  this.proClicked = false;
  this.webClicked = false;
  this.getProjects();
}

/**
 * When the "APP" button is clicked
 */
displayApp(): void{
  this.allClicked = false;
  this.appClicked = true;
  this.proClicked = false;
  this.webClicked = false;
  this.getProjects();
}

/**
 * When the "PRO" button is clicked
 */
displayPro(): void{
  this.allClicked = false;
  this.appClicked = false;
  this.proClicked = true;
  this.webClicked = false;
  this.getProjects();
}

/**
 * When the "WEB" button is clicked
 */
displayWeb(): void{
  this.allClicked = false;
  this.appClicked = false;
  this.proClicked = false;
  this.webClicked = true;
  this.getProjects();
}
}
