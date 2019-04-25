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
    // if (event === 'btn-info') {
    //   this.toogleModal('test_modal');
    // }
  }
}
