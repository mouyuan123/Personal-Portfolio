/**
 * This service is to animate counting up or counting down of a number
 * Can also refer (https://github.com/srexi/purecounterjs) for import
 */
import { Injectable } from '@angular/core';
import { interval, Subscription, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PureCounterService {

  constructor() { }

  /**
   * 
   * @param maximum: Animate counting from 0 to defined number
   */
  animateCountUp(initial:number, maximum: number){
   let timeSubscription = new Subscription();
   timeSubscription = interval(70).pipe(map(() => {
    initial = initial + 1;
    if(initial >= maximum){
      timeSubscription.unsubscribe();
    }
   })).subscribe();
  }

/**
 * 
 * @param initial: Counting down start from "initial"
 * @param minimum: Counting down "initial" until "minimum";
 */
  animateCountDown(initial: number, minimum:number, ){
    let timeSubscription = new Subscription();
    timeSubscription = interval(70).pipe(map(() => {
     initial = initial - 1;
     if(initial <= minimum){
       timeSubscription.unsubscribe();
     }
    })).subscribe();
  }
}
