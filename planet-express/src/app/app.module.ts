import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/views/app.component';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HotToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
