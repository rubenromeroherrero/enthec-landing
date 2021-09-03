import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/core/models/employee';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { ToastMessagesService } from 'src/app/core/services/toast-messages.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  newsletterForm: FormGroup;
  employees: Employee[] = [];

  constructor(
    fb: FormBuilder,
    private serviceModel: EmployeeService,
    private toastService: ToastMessagesService
  ) {
    this.newsletterForm = fb.group({
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // this.serviceModel.getEmployees().subscribe((result) => {
    //   this.employees = result;
    // });
  }

  saveClick(form: FormGroup): void {
    if (form.valid) {
      this.toastService.showSuccess(
        `${form.value.email} ha sido registrado correctamente`
      );
      form.reset();
    }
  }
}
