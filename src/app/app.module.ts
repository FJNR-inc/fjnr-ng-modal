import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NtModalComponent } from './components/nt-modal/nt-modal.component';
import { AlertComponent } from './components/shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NtModalComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
