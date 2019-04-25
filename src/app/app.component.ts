import {Component, Input} from '@angular/core';
import { MyModalService } from './components/nt-modal/services/my-modal/my-modal.service';

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
    const modal = this.myModalService.get(name);

    if (!modal) {
      // console.error('No modal named %s', name);
      return;
    }

    modal.toggle();
  }

  actionButton(event) {
    const modal = this.myModalService.get(this.name);
    // console.log(event)
    if (event === 'ok') {
      // console.log('ok');
      this.toogleModal(this.name);
    } else if (event === 'close') {
      // console.log('close');
    } else if (event === 'information') {
      // console.log('information');
    }
  }
}
