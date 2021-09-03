import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './views/app.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimerComponent } from './views/landing/timer/timer.component';
import { CalculatorComponent } from './views/landing/calculator/calculator.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    TimerComponent,
    CalculatorComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: [],
  exports: [AppComponent],
})
export class CoreModule {}
