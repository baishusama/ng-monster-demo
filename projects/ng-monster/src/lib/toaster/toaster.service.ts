import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

// declare let $: any;
// declare let toastr: any;
const options = {
  showTimeOut: 3000
};

@Injectable()
export class NmToasterService {
  // toastr$:
  private _toastrsChangedSubject: BehaviorSubject<string> = new BehaviorSubject(
    ''
  );
  private _toastrs = [];

  public get toastrs() {
    return this._toastrs;
  }

  public get toastrChanged$(): Observable<string> {
    return this._toastrsChangedSubject.asObservable();
  }

  constructor() {}

  success(title, body?) {
    // toastr.success(title, body);
    this.add('success', title, body);
  }

  info(title, body?) {
    this.add('info', title, body);
  }

  warning(title, body?) {
    this.add('warning', title, body);
  }

  error(title, body?) {
    this.add('error', title, body);
  }

  add(type, title, body?) {
    // Simple Toastr
    this._toastrs.unshift({
      title: title,
      msg: body || '',
      type: type,
      opacity: 1,
      tid: setTimeout(() => {
        this._toastrs.pop();
        this._toastrsChangedSubject.next('Deleted oldest toastr!');
      }, options.showTimeOut)
    });
    this._toastrsChangedSubject.next('Added new toastr!');
  }
}
