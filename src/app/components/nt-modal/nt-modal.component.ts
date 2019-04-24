import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MyModalService } from '../../services/my-modal/my-modal.service';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-nt-modal',
  templateUrl: './nt-modal.component.html',
  styleUrls: ['./nt-modal.component.scss']
})
export class NtModalComponent implements OnInit {
  @Input() name: string;
  @Input() title;
  @Input() typeModal: 'default' | 'danger' | 'information' | 'warning' | 'form';
  @Input() generalClass: string;
  // @Input() button1 = null;
  // @Input() button2 = null;
  @Input() buttons = null;
  @Input() maxWidth = '95%';
  @Input() activated = true;
  @Input() autoClose = false;
  @Input() show = false;

  @ViewChild('modalContent') modalContent;

  // @Output() button1: EventEmitter<any> = new EventEmitter();
  // @Output() button2: EventEmitter<any> = new EventEmitter();

  isModalInformation: boolean;
  isModalForm: boolean;
  iconModals = {
    info: 'fa fa-exclamation-circle fa-2x',
    danger: 'fa fa-exclamation-triangle fa-2x',
    warning: 'fa fa-exclamation-triangle fa-2x',
  };
  iconModal = null;
  errorMessage: string;

  constructor(private myModals: MyModalService) {
    if (this.typeModal === undefined) {
      this.typeModal = 'default';
    }

    if (this.buttons === null) {
      console.log('www')
      this.buttons = [
        {
          label: 'ok',
          type: this.typeModal,
          position: 1
        }
      ];
    }
  }

  ngOnInit() {
    this.initIconModal(this.typeModal);
    this.isModalInformation = this.typeModal === 'information';
    this.isModalForm = this.typeModal === 'form';

    this.myModals.set(this.name, this);
  }
  initIconModal(typeModal: string) {
    typeModal = typeModal.toLowerCase();

    switch (typeModal) {
      case 'information':
        this.iconModal = this.iconModals.info;
        break;
      case 'danger':
        this.iconModal = this.iconModals.danger;
        break;
      case 'warning':
        this.iconModal = this.iconModals.warning;
        break;
    }
  }

  clickOverlay(event: Event) {
    const target = (event.target as HTMLElement);

    if (target.classList.contains('modal-component') || target.classList.contains('modal-component__content')) {
      this.toggle();
    }
  }

  setErrorMessage(value: string) {
    this.errorMessage = value;
  }

  close() {
    this.show = false;
    console.log(this.show);
  }

  toggle() {
    this.show = !this.show;

    if (this.show) {
      document.addEventListener('keyup', this.escapeListener);
    } else {
      document.removeEventListener('keyup', this.escapeListener);
      this.errorMessage = '';
    }
  }

  private escapeListener = (event: KeyboardEvent) => {
    if (event.which === 27 || event.keyCode === 27) {
      this.show = false;
    }
  }

  clickButton1(): void {
    // this.button1.emit(null);
    // if (this.autoClose) {
    //   this.toggle();
    // }
  }

  clickButton2(): void {
    // this.button2.emit(null);
    // if (this.autoClose) {
    //   this.toggle();
    // }
  }

  getLabelButton1() {
    // if (this.button1Label) {
    //   return this.button1Label;
    // } else {
    //   return 'shared.yes';
    // }
  }

  getLabelButton2() {
    // if (this.button2Label) {
    //   return this.button2Label;
    // } else {
    //   return 'shared.no';
    // }
  }
}
