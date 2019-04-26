import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtModalComponent } from './nt-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyModalService} from '../../services/my-modal/my-modal.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
  ],
  declarations: [
    NtModalComponent,
  ],
  providers: [
    MyModalService
  ],
  exports: [
    NtModalComponent,
  ]
})
export class NtModalModule { }
