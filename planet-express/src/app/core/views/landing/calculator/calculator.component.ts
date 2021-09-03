import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  calculatorForm: FormGroup;
  active: boolean = false;
  result: number = 0;

  constructor(fb: FormBuilder) {
    this.calculatorForm = fb.group({
      quantity: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  saveClick(form: FormGroup): void {
    if (form.valid) {
      this.active = true;
      this.result = form.value.quantity * form.value.weight;
      form.reset();
    }
  }
}
