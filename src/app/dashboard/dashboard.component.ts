import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('contactSection') contactSection: ElementRef | undefined;
  constructor(private renderer: Renderer2, private scrollService:ScrollService) {}
  ngAfterViewInit() {
    if (this.contactSection) {
      this.scrollService.registerFooter(this.contactSection);
    }
  }

  scrollToBottom() {
    this.scrollService.scrollToFooter();
  }
}
