import { Component, OnInit } from '@angular/core';

import { NmToasterService } from 'ng-monster';

@Component({
  selector: 'nm-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  constructor(private toasterService: NmToasterService) {}

  ngOnInit() {}

  showSuccessToaster() {
    this.toasterService.success('Hello, monster :B');
  }

  showInfoToaster() {
    this.toasterService.info('Hello, monster :B');
  }

  showWarningToaster() {
    this.toasterService.warning('Hello, monster :B');
  }

  showErrorToaster() {
    this.toasterService.error('Hello, monster :B');
  }
}
