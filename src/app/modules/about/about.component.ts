import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // Calculate my current age and display at "About" section
  currentAge = new Date().getFullYear() - 2001;

  constructor() { }

  ngOnInit(): void {
  }

}
