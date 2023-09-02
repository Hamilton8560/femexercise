import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';
import { ScrollService } from '../scroll.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private scrollSubscription: Subscription;
  contactForm: FormGroup;

  
  constructor(
    private http: HttpClient,
    private scrollService: ScrollService,
    private elementRef: ElementRef,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
    this.scrollService.registerFooter(this.elementRef);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      emailjs.init('b2vMoQ9g03st1oCv7');
      const formData = this.contactForm.value;
      emailjs.send("service_gy9pfw8","template_jams4pp",{
        from_name: formData.name,
        message: formData.message,
        reply_to: formData.email,
        to_name: 'David!'
      });   
      this.contactForm.reset();
    } else {
      console.log("Form is invalid");
    }
  }
}
