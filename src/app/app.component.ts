import {Component, Input} from '@angular/core';
import { MyModalService } from './services/my-modal/my-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'fjnr-ng-modal';
  name = null;

  constructor(
    private myModalService: MyModalService,
  ) {}

  toogleModal(name) {
    this.name = name;
    // const name = 'test_modal';
    const modal = this.myModalService.get(name);

    if (!modal) {
      // console.error('No modal named %s', name);
      return;
    }

    // modal.button2Label = 'terms.button';
    modal.toggle();
  }

  cancelReservation() {
    console.log('ssss');
  }

  actionButton(event) {
    const modal = this.myModalService.get(this.name);

    if (event === 'ok') {
      console.log('ok');
      modal.toggle();
    } else if (event === 'close') {
      console.log('close');
    } else if (event === 'information') {
      console.log('information');
    }
  }
}
