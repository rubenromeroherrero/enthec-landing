import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastMessagesService } from 'src/app/core/services/toast-messages.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  newsletterForm: FormGroup;

  // flag
  submited: boolean = false;

  constructor(fb: FormBuilder, private toastService: ToastMessagesService) {
    this.newsletterForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  saveClick(form: FormGroup): void {
    this.submited = true;

    if (form.valid) {
      this.toastService.showSuccess(
        `${form.value.email} ha sido registrado correctamente`
      );
      this.submited = false;
      form.reset();
    } else {
      this.toastService.showError(`Debes introducir un email correcto`);
    }
  }
}
