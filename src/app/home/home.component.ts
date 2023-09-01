import { Component, ElementRef, NgZone,OnDestroy,OnInit } from '@angular/core';
import { ThreeService } from '../three.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private ngZone: NgZone, private threeService: ThreeService) { }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        this.threeService.init(canvas);
        this.threeService.adjustCanvasSize(); // Adjust canvas size initially

        // Add window resize event listener
        window.addEventListener('resize', this.onWindowResize.bind(this));
      }
    });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }
  onWindowResize() {
    this.threeService.adjustCanvasSize();
  }
}
