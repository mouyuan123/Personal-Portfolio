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
      "Name": "Taskwise Management System",
      "Role": "Develop Node.js server and Angular web frontend",
      "Description": `In my final year project, my teammate and I had a transformative collaboration with Netsinity Sdn Bhd, spearheading the development of an innovative task management system tailored to address the unique challenges faced by SMEs. 
      This platform revolutionizes workflow by rectifying common issues such as workload imbalances, inefficient documentation, suboptimal customer engagement, and unfair employee evaluations. In the end of development,
      I had deploy the Python server and Node server at Render.com as well as Angular web at cPanel.
      `,
      "Highlight": `Our system stands out by empowering users to seamlessly oversee projects, delegate tasks, and generate issue tickets, all while aligned with their distinct roles.
      Besides, it allows the manager to evaluate the monthly performance of each engineer every month (calculated automatically)
      as well as generate monthly report for overall company performance.
      A pivotal feature of our design is the integration of WebSocket technology, which facilitates instantaneous communication between clients and engineering teams, ensuring that issue resolution is swift and effective. 
      This real-time interface is complemented by immediate notification dispatches, keeping all users promptly informed.
      I did incorporate Cloudinary's robust cloud services for storing diverse file types, enhancing accessibility and collaboration. 
      Lastly, I trained Multilayer Perceptron (MLP) model which is used to predict engineers' future performance based on different quantitative data`,
      "URL": "https://taskwise.web.netsys.com.my",
      "Tech": 'MEAN Stack, WebSocket, Cloudinary, Machine Learning',
      "images": ['assets/img/taskwise_pictures/a.png', 
      'assets/img/taskwise_pictures/b.png',
      'assets/img/taskwise_pictures/c.png',
      'assets/img/taskwise_pictures/d.png',
      'assets/img/taskwise_pictures/e.png',
      'assets/img/taskwise_pictures/f.png',
      'assets/img/taskwise_pictures/g.png',
      'assets/img/taskwise_pictures/h.png',
      'assets/img/taskwise_pictures/i.png',
      'assets/img/taskwise_pictures/j.png',
      'assets/img/taskwise_pictures/k.png',
      'assets/img/taskwise_pictures/l.png',
      ],
    },
    {
      "id": 2,
      "Name": "Supabaza",
      "Role": "Debugging and enhancing (1 month)",
      "Description": `The above image is taken from Supabaza Facebook because the current website url is forbidden. During my study, the employer found me via Freelancer and I agree to work with him to debug and enhance
      his current website. 
      During my studies, I was approached by an employer through Freelancer to troubleshoot and improve their existing website. This was a task-based engagement, with compensation tied to the number and complexity of issues resolved. 
      After dedicating a month to this role, I recognized the need to prioritize my academic responsibilities, as they were intensifying alongside a mounting workload.
      Consequently, I made the difficult decision to end my contract with Supabaza to focus on my studies.
      Hence, I cancel the contract with Supabaza. Throughout this work, I have earned total of RM 800.`,
      "URL": "https://supabaza.com/",
      "Tech": 'Glide',
      "images": ['assets/img/supabaza/a.png']
    },
    {
      "id": 3,
      "Name": "Content Blogger",
      "Role": "Providing Programming Solution Contents",
      "Description": `This the the first work I get from Freelancer. After getting the milestone, I consistently
      provide different articles based on the outline and rubrics provided by the employer.
      Few months ago, I decide to terminate the contract with the employer due to the fact that I need
      to prioritize my study in my last semester. However, the employer will wait for me and I was considering to continue providing the
      articles once I graduated. Throughout this work, I have written 21 articles and earned total of AUD 84.
      (p.s. All the materials in the link is missing because the employer has moved to the new platform.)`,
      "URL": "https://kodlogs.net/user/mouyuan123",
      "Tech": 'N/a',
      "images": ['assets/img/blogger/a.png', 'assets/img/blogger/b.png', 'assets/img/blogger/c.png']
    },
    {
      "id": 4,
      "Name": "Internship (Fusionex)",
      "Role": "Full Stack Developer",
      "Description": `Throughout 6 months of internship, I did learn the web framework such as Angular as well as new
      backend framework (ASP.NET + SQL Server). All my colleagues are great and I will seek help from them If I faced odds in my works.
      It was an unforgotten and happy experiences.`,
      "Tech": 'Angular, ASP.NET, SQL Server',
      "images": ['assets/img/fusionex/a.jpg', 'assets/img/fusionex/b.jpg']
    },
    {
      "id": 5,
      "Name": "Weather Forecasting",
      "Role": "Self-Learning",
      "Description": `Throughout my internship, I developed an application as a means to deepen my knowledge of Angular. Additionally, I integrated Firebase authentication and utilized Firestore for storing essential images, including users' profile pictures and images associated with different countries.`,
      "Highlight":`I made a simple dark and light mode for this application and integrate with OpenWeatherMap
      API free subscription to retrieve the weather forecast of each available location.`,
      "URL": "https://mouyuan123.github.io/weather-application/",
      "Tech": "Angular, Firebase, OpenWeatherMap",
      "images": ['assets/img/weather/a.png',
      'assets/img/weather/b.png',
      'assets/img/weather/c.png',
      'assets/img/weather/d.png',
      'assets/img/weather/e.png',
      'assets/img/weather/f.png',
      'assets/img/weather/g.png'],
    },
    // {
    //   "id": 4,
    //   "Name": "Academic Stress Talk",
    //   "Role": "Project Manager",
    //   "Description": `In the 'Thinking and Communication' course, we make a talk related to academic stress with my team members. As a project manager, I need to conduct the meeting to follow up with the milestones and progress of the project. 
    //                         Besides, I also need to assgin tasks to each member and communicate with BeFrienders Penang to ensure the success of the event.`,
    //   "images": ['assets/img/portfolio-detail/talk-page-1.png',
    //                 'assets/img/portfolio-detail/talk-page-2.png',
    //                 'assets/img/portfolio-detail/talk-page-3.png',
    //                 'assets/img/portfolio-detail/talk-page-4.png'],
    // },
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
