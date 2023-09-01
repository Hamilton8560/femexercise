import { Component } from '@angular/core';
import { Injectable, ElementRef } from '@angular/core';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  private footerElement: ElementRef | undefined;

  registerFooter(element: ElementRef | undefined): void {
    this.footerElement = element;
  }
  scrollToFooter(): void {
    if (this.footerElement) {
      this.footerElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
