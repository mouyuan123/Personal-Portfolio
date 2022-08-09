import { Component, OnInit } from '@angular/core';
import { PureCounterService } from 'src/app/services/pure-counter.service';
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

  constructor(private pcs: PureCounterService) { 

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
