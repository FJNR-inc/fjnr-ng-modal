import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtModalComponent } from './nt-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
  ],
  declarations: [
    NtModalComponent,
  ],
  exports: [
    NtModalComponent,
  ]
})
export class NtModalModule { }
