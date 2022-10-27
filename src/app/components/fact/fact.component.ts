import { Component, OnInit } from '@angular/core';
import { interval, Subscription, map } from 'rxjs';


@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {

  from = 0;
  to = 232;
  timerSubscription1!: Subscription;

  facts: any[] = 
  [
    {
      'title': 'Communicative',
      'content': `I'm willing to know more friends and enjoying doing projects with my team members.`
    },
    {
      'title': 'Matcha Lover',
      'content': `I love matcha flavour very much, especially the Niko Neko brand.`
    },
    {
      'title': 'Punctuality',
      'content': `I appreciate my time and I will allocate the time fairly among leisure, studying, and exercising.`
    },
    {
      'title': 'Food Aficionado',
      'content': `As long as there is delicous and aromatic food or desserts, I'll be survived!`
    },
  ]

  constructor() { 

  }

  ngOnInit(): void {
    this.timerSubscription1 = interval(0.1).pipe(map(() => this.valueCounter1())).subscribe();
  }

  valueCounter1() {
    this.from++
    if (this.from >= this.to) {
      this.timerSubscription1.unsubscribe()
    }
  }

}
