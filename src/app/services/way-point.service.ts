/**
 *  Trigger a function (handler()) when we scroll to an element
 *  https://github.com/zumba/angular-waypoints
 */
import { Injectable } from '@angular/core';
declare const Waypoint: any;


@Injectable({
  providedIn: 'root'
})
export class WayPointService {

  constructor() { }

  /**
   * Skills animation
   */
  skillsAnimation():void{
    document.addEventListener('scroll', () => {
      let skilsContent = document.querySelector('.skills-content');
      if(skilsContent){
        // pageYOffset / scrollY -> Retrieve the current vertical position of the document currently scrolled to (pixels)
        // getBoundingClientRect() -> returns "DOMRect" object of a specific DOM element (Mainly used to retrieve its position relative to the viewport and its size)
        // References: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        if (window.scrollY >= skilsContent.getBoundingClientRect().top) {
        // To use the ".style" property
        let progress = Array.from(document.getElementsByClassName('progress-bar') as HTMLCollectionOf<HTMLElement>);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
        }
      })
  }
}