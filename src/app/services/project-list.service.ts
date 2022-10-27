import { Injectable } from '@angular/core';
import { Project } from '../interface/projects';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
    // To store the projects that need to be displayed
  projectToDisplay: any = 
  [
    {
      "id": 1,
      "projectDefaultImg": "assets/img/portfolio/web-development.jpeg",
      "projectName": "Goal Tracker",
      "projectCategory": "Web Development",
      "projectDate": " Semester 2 Year 2",
      "projectRole": "Developer",
      "projectDescription": `My teammate and I develop a goal tracker website for our Web Development course using HTML, CSS, Javascript, MySQL and PHP. 
                            In this project, I contribute to the mentor part and utilise DataTables to disply the list of mentees and AJAX to avoid page-reloading whenever a form is submitted`,
      "projectURL": "string"
    },
    {
      "id": 2,
      "projectDefaultImg": "assets/img/portfolio/project.jpeg",
      "projectName": "Academic Stress Talk",
      "projectCategory": "Project",
      "projectDate": " Semester 1 Year 2",
      "projectRole": "Project Manager",
      "projectDescription": `In the 'Thinking and Communication' course, we make a talk related to academic stress with my team members. As a project manager, I need to conduct the meeting to follow up with the milestones and progress of the project. 
                            Besides, I also need to assgin tasks to each member and communicate with BeFrienders Penang to ensure the success of the event.`,
      "projectURL": "string"
    },
    {
      "id": 3,
      "projectDefaultImg": "assets/img/portfolio/app-development.jpeg",
      "projectName": "myDiary",
      "projectCategory": "App Development",
      "projectDate": " Semester 1 Year 2",
      "projectRole": "Self-Learning",
      "projectDescription": `I join GDSC event which teach us the basic concepts of 'Android Studio' through designing a 'myDiary' application which will save our diary and images. This application integrates with Firebase, Google Sign-in API and also TensorFlow Lite. 
                            Throughout this event, I learn a lot of techniques and skills that should be possessed while developing an application.`,
      "projectURL": "string"
    },
    {
      "id": 4,
      "projectDefaultImg": "assets/img/portfolio/web-development.jpeg",
      "projectName": "Weather",
      "projectCategory": "Web Development",
      "projectDate": " Semester 1 Year 3",
      "projectRole": "Self-Learning",
      "projectDescription": `When I start my internship at Fusionex, I learn about Angular. Hence, I decide to do a project using Angular. 
                            I integrate this application with Firebase for authentication, and use Firestore to store the user's information. Besides, I embedded OpenWeatherMap API free subscription to retrieve the weather.
                            However, the weakness of this website is the responsive design not comprehensive and I am still collecting the images of all capitals in the world.
                            Lastly, I also design the application for both dark and light mode. `,
      "projectURL": "https://mouyuan123.github.io/weather-application/",
      "projectImg": ['assets/img/portfolio-detail/weather-page-4.png',
                    'assets/img/portfolio-detail/weather-page-1.png',
                    'assets/img/portfolio-detail/weather-page-2.png',
                    'assets/img/portfolio-detail/weather-page-3.png'],
    },
    {
      "id": 5,
      "projectDefaultImg": "assets/img/portfolio/project.jpeg",
      "projectName": "Household Green Technology",
      "projectCategory": "Project",
      "projectDate": " Semester 2 Year 2",
      "projectRole": "Project Manager",
      "projectDescription": `I was the project manager in this project. I need to coordinate meetings and discussions among team members to reach consensus about the green technologies to be chosen.
                            Besides, I also need to check the design of the we page and we use Wix.com to complete our webpage design.`,
      "projectURL": "https://householdgreentech.wixsite.com/my-site"
    }
  ]

  constructor() { }

  // Return all the projects of the list
  getAllProjects(): Observable<Project[]>{
    return of(this.projectToDisplay);
  }

  // Return projects with "Project" category
  getProjects(): Observable<Project[]>{
    let filteredProject: any = [];
    this.projectToDisplay.forEach((project: any) => 
      {
        if(project.projectCategory == 'Project'){
          filteredProject.push(project);
        }
      })
    return of(filteredProject);
  }

  // Return projects with "App" categpry
  getAppProjects(): Observable<Project[]>{
    let filteredProject: any = [];
    this.projectToDisplay.forEach((project: any) => 
      {
        if(project.projectCategory == 'App Development'){
          filteredProject.push(project);
        }
      })
    return of(filteredProject);
  }

  getWebProjects(): Observable<Project[]>{
    let filteredProject: any = [];
    this.projectToDisplay.forEach((project: any) => 
      {
        if(project.projectCategory == 'Web Development'){
          filteredProject.push(project);
        }
      })
    return of(filteredProject);
  }

  getProject(id: number): Observable<Project>{
    let filteredProject: any;
    this.projectToDisplay.forEach((project: any) => 
      {
        if(project.id === id){
          filteredProject = project;
        }
      })
    return of(filteredProject);
  }
}
