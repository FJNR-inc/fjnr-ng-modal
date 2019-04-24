import { Component } from '@angular/core';
import { MyModalService } from './services/my-modal/my-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fjnr-ng-modal';

  constructor(
    private myModalService: MyModalService,
  ) {}

  toogleModal(name) {
    // const name = 'test_modal';
    const modal = this.myModalService.get(name);

    if (!modal) {
      // console.error('No modal named %s', name);
      return;
    }

    modal.button2Label = 'terms.button';
    modal.toggle();
  }
}
