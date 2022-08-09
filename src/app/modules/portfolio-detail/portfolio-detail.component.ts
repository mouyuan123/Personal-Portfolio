import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Project } from 'src/app/interface/projects';
import { ProjectGeneratorService } from 'src/app/services/project-generator.service';
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

  constructor(private route: ActivatedRoute, private pgs: ProjectGeneratorService, private location: Location, private toast: ToastrService) { }


  ngOnInit(): void {
    this.getProject();
  }

  /**
   * Display the specific project information when it is clicked
   */
  getProject(): void{
    const projectID = String(this.route.snapshot.paramMap.get("pid"));
    this.pgs.getProject(projectID).subscribe(project => {this.project = project;});
  }

  /**
   * Display the specific project information when it is clicked
   */
   deleteProject(): void{
    if(this.project.id){
      this.pgs.deleteProject(this.project.id).subscribe();
    }
  }

  /**
   * Update project description of specific project
   */
  updateProjectDescript(): void{
    this.pgs.updateProjectDescript(this.project).subscribe();
    this.showSuccess();
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
