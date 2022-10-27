import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  services: any[] = 
  [
    {
      'title': 'Front-end Designer',
      'description': `I can adjust and design the layout of a page using the developer tools and media queries effectively.`
    },
    {
      'title': 'Backend Designer',
      'description': `I know the simple CRUD operations using PHP and MySQL. Besides, I know to check the payload and preview of network for API in developer tools.`
    },
    {
      'title': 'Freelancer',
      'description': `Although I do not do any project in Freelancer, but I have an account and always ready to start off.`
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
