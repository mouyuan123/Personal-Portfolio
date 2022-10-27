import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ProjectListService } from 'src/app/services/project-list.service';
import { Project } from 'src/app/interface/projects';
// To determine the activated / current visited route
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// Toast service from ngx-toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {
  // If there is no project clicked, the project is "undefined" by default
  project!: Project;
  // Toggle the "Update" & "Save" button for project description
  isUpdate: boolean = true;
  // Check whether is mobile version
  isMobile!: boolean;

  constructor
  (
    private route: ActivatedRoute, 
    private location: Location, 
    private toast: ToastrService, 
    private projectList: ProjectListService
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize($event: any){
    if(window.screen.width <= 991 || window.innerWidth <= 991){
      this.isMobile = true;
    }
    else{
      this.isMobile = false;
    }
  }

  ngOnInit(): void {
    if(window.screen.width <= 991 || window.innerWidth <= 991){
      this.isMobile = true;
    }
    else{
      this.isMobile = false;
    }
    this.getProject();
  }

  /**
   * Display the specific project information when it is clicked
   */
  getProject(): void{
    const projectID = this.route.snapshot.paramMap.get("pid");
    this.projectList.getProject(Number(projectID)).subscribe(project => this.project = project);
  }


  /**
   * Display success toast when change the description successfully
   */
  showSuccess(): void{
    let title = 'Amend project description';
    let contents = 'You have amended the project description successfully!';
    this.toast.success(contents,title,{
      positionClass: 'toast-bottom-right'
    })
  }

  /**
   * Navigate back to the previous page
   */
    goBack(): void{
      this.location.back();
    }
}
