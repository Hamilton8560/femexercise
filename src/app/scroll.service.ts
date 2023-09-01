// scroll.service.ts
import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private footerElement: ElementRef | null = null;

  registerFooter(footer: ElementRef) {
    this.footerElement = footer;
  }

  scrollToFooter() {
    this.footerElement?.nativeElement.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
}