import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NtModalModule } from './components/nt-modal/nt-modal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NtModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
