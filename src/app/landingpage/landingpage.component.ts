// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-landingpage',
//   templateUrl: './landingpage.component.html',
//   styleUrls: ['./landingpage.component.scss'],
// })
// export class LandingpageComponent  implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {}
//
// }
//




// import { CommonModule } from '@angular/common';
// import {Component, Input, NgModule, OnInit} from '@angular/core';
// import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
//
// @Component({
//   selector: 'app-landingpage',
//   templateUrl: './landingpage.component.html',
//   styleUrls: ['./landingpage.component.scss']
// })
//
// @NgModule({
//   declarations: [LandingpageComponent],
//   imports: [CommonModule],
// })
//
// export class LandingpageComponent implements OnInit {
//   @Input() slides: any[] = [];
//   @Input() indicatorsVisible = true;
//   @Input() animationSpeed = 600;
//   @Input() autoPlay = true;
//   @Input() autoPlaySpeed = 4000;
//   currentSlide = 0;
//   faArrowRight = faArrowRight;
//   faArrowLeft = faArrowLeft;
//   hidden = false;
//
//   next() {
//     let currentSlide = (this.currentSlide + 1) % this.slides.length;
//     this.jumpToSlide(currentSlide);
//   }
//
//   previous() {
//     let currentSlide =
//       (this.currentSlide - 1 + this.slides.length) % this.slides.length;
//     this.jumpToSlide(currentSlide);
//   }
//
//   jumpToSlide(index: number) {
//     this.hidden = true;
//     setTimeout(() => {
//       this.currentSlide = index;
//       this.hidden = false;
//     }, this.animationSpeed);
//   }
//
//   constructor() {
//     this.slides = [
//       // ... your slide objects
//     ];
//   }
//
//   ngOnInit() {
//     if (this.autoPlay) {
//       setInterval(() => {
//         this.next();
//       }, this.autoPlaySpeed);
//     }
//   }
// }
//



import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  @Input() slides: any[] = [];
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 600;
  @Input() autoPlay = true;
  @Input() autoPlaySpeed = 4000;
  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  next() {
    let currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  constructor() {
    this.slides = [
      // ... tus objetos de diapositivas
    ];
  }

  ngOnInit() {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }
}
