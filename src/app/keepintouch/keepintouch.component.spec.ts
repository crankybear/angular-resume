import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepintouchComponent } from './keepintouch.component';

describe('KeepintouchComponent', () => {
  let component: KeepintouchComponent;
  let fixture: ComponentFixture<KeepintouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepintouchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepintouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
