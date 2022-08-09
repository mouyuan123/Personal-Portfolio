/**
 * Provide the type writing animations and effects to all the modules
 */
import { Injectable } from '@angular/core';
// Use @ts-ignore to avoid error while importing
// @ts-ignore
import Typewriter from 't-writer.js';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {

  constructor() { }

  /**
   * Home Page Introduction Animation
   */
  homeIntro(): void{
    /** Whenever the "home" page is displayed, the 'T-writer' animations are called 
     *  Avoid doing this animation in .js file as it will goes only one time 
     *  and not functioning once back from the route navigation
    */
     const target = document.querySelector('.typed');
     const writer = new Typewriter(target, {
       loop: true,
       // Change the text color
       typeColor: 'white',
       // Change the text cursor indicator color
       cursorColor: 'white'
     })

     writer
       .strings(
         400,
         "Developer",
         "Designer", 
         "Sports Lover"
       )
       .start()
  }
}
