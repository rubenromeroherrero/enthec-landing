import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  newsletterForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.newsletterForm = fb.group({
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  saveClick(form: FormGroup): void {
    if (form.valid) {
      form.reset();
    }
  }
}
