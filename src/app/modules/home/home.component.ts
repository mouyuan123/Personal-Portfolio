import { Component, OnInit } from '@angular/core';
import {TypewriterService } from  '../../services/typewriter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private typewriter: TypewriterService) {}

  ngOnInit(): void {
    this.typewriter.homeIntro();
  }
  }

