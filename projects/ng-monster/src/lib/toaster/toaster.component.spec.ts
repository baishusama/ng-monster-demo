import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmToasterComponent } from './toaster.component';

describe('NmToasterComponent', () => {
  let component: NmToasterComponent;
  let fixture: ComponentFixture<NmToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmToasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
