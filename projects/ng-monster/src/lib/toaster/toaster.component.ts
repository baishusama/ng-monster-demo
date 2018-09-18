import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NmToasterService } from './toaster.service';

@Component({
  selector: 'nm-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class NmToasterComponent implements OnInit {
  toastrChange$: Observable<string>;
  toastrs = [];

  constructor(private toastrService: NmToasterService) {}

  ngOnInit() {
    this.toastrChange$ = this.toastrService.toastrChanged$;
    this.initToastrs();

    this.toastrChange$.subscribe(res => {
      this.updateToastrs();
    });
  }

  initToastrs() {
    this.toastrs = this.toastrService.toastrs;
  }

  updateToastrs() {
    this.initToastrs();
  }
}
