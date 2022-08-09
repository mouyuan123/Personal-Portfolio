import { Component, EventEmitter, OnInit, Output, ElementRef, ViewChild } from '@angular/core';
// To generate a reactive form
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Project } from 'src/app/interface/projects';
import { ProjectGeneratorService } from 'src/app/services/project-generator.service';
// Toast service from ngx-toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.css']
})
export class AddProjectFormComponent implements OnInit {
  // To check whether a proper Internet Url is embedded
  urlRegEx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  // Allows the "parent" component (portfolio.component) to close the form when "close" button is pressed
  @Output() closeForm = new EventEmitter();
  // For each input, I have added the built-in validators in angular
  addProjectForm = this.fb.group({
    title: ['',[Validators.required]],
    category: ['Project', [Validators.required]],
    timeline: ['', [Validators.required]],
    role: ['', [Validators.required]],
    description: ['', [Validators.required]],
    url: ['', [Validators.required, Validators.pattern(this.urlRegEx)]],
    // Dynamic Form ( I have unlimited images to be uploaded )
    imagesUrl: this.fb.array([this.fb.control('',[Validators.required])],[Validators.required])
    });   

  constructor(private fb: FormBuilder, private pgs: ProjectGeneratorService, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  // Getter methods to retrieve the value of each form control in "addProjectForm"
  get category(){
    return this.addProjectForm.get('category');
  }

  get timeline(){
    return this.addProjectForm.get('timeline');
  }

  get title(){
    return this.addProjectForm.get('title');
  }

  get role(){
    return this.addProjectForm.get('role');
  }

  get description(){
    return this.addProjectForm.get('description');
  }

  get url(){
    return this.addProjectForm.get('url');
  }

  // Easier called using getter method in HTML template
  get projectImg() {
    return this.addProjectForm.get('imagesUrl') as FormArray;
  }


  // Add images of project (Use the getter method to retrieve the "imagesUrl")
  addMoreImages(): void {
    // Each file input MUST have input value
    this.projectImg.push(this.fb.control('',[Validators.required]));
  }

  // Remove the image at specific index of Form Array
  deleteImage(index: number): void{
    this.projectImg.removeAt(index);
  }

  // Create "Project" object and submit to the server 
  onSubmit(data: any): void{
    // Check whether all the validations are passed before generating the project
    if(this.addProjectForm.valid){
      // Create an instance of Project by retrieving the value of each input field
      let project: Project = {
        projectDefaultImg: this.defaultImg(data.category),
        projectName: data.title,
        projectCategory:  data.category, 
        projectDate: data.timeline,
        projectRole: data.role,
        projectDescription:  data.description,
        projectURL: data.url,
        projectImg: data.imagesUrl
      }
      // Add the project to the server
      this.addProject(project);
      // Reset the form values after form submission
      this.addProjectForm.reset();
      this.projectImg.clear();
      this.showSuccess();
    }
    else{
      this.showFailure();
    }
  }

  // Determine the project default image based on its category
  defaultImg (category:string): string{
    switch(category){
      case 'App Development': return "assets/img/portfolio/app-development.jpeg";
      case 'Web Development': return "assets/img/portfolio/web-development.jpeg";
      default: return "assets/img/portfolio/project.jpeg";
    }
  }
  // Create "Project" object to be submitted after "Add" button is clicked
  addProject(project: Project): void{
    this.pgs.addProject(project).subscribe(() =>{});
  }  

  // Fire when each file input value is changes
  onFileChange(event: any, index: number) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const file = event.target.files[0];
        // Convert the file/Blob to base64 encoded string to be safely transmitted and read
        // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
        // https://www.base64encoder.io/learn/ 
       reader.readAsDataURL(file);
        reader.onload = (event: any) => {
          this.projectImg.at(index).setValue(reader.result);
      }
      reader.onerror = (event: any) =>{
        console.log("File could not be read: " + event.target.error.code);
      }
  }
}

  // Display a success toast when project is added successfully
  showSuccess() {
    let title =  'Add project successfully';
    let contents = 'You have added the project successfully!'
    this.toast.success(contents, title,{
      positionClass:'toast-top-center'
    });
    this.toast.toastrConfig.preventDuplicates = true;
  }

  // Display a fail toast when failure occurs while adding project
  showFailure(){
    let title =  'Fails to add project';
    let contents = 'Make sure you fill up all the input fields'
    this.toast.error(contents, title,{
      positionClass:'toast-top-center'
    });
    // Avoid the message to be displayed repetitively while the button is clicked
    this.toast.toastrConfig.preventDuplicates = true;
  }

  // Emit an event to close the form
  close(): void{
    this.closeForm.emit();
  }
}
