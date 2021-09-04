import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastMessagesService } from 'src/app/core/services/toast-messages.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  calculatorForm: FormGroup;
  active: boolean = false;
  result: number = 0;

  // flag -> para indicar que se ha pulsado el botón de unete
  submited: boolean = false;

  constructor(fb: FormBuilder, private toastService: ToastMessagesService) {
    this.calculatorForm = fb.group({
      quantity: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  saveClick(form: FormGroup): void {
    // flag para poner campos en rojo
    this.submited = true;

    if (form.valid) {
      this.result = form.value.quantity * form.value.weight;
      this.active = true;
      this.submited = false;
      form.reset();
    } else {
      this.toastService.showError(`Revisa los campos en rojo`);
    }
  }
}
