import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMonsterComponent } from './ng-monster.component';

describe('NgMonsterComponent', () => {
  let component: NgMonsterComponent;
  let fixture: ComponentFixture<NgMonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
