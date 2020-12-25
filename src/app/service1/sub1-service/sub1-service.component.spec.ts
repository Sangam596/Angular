import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub1ServiceComponent } from './sub1-service.component';

describe('Sub1ServiceComponent', () => {
  let component: Sub1ServiceComponent;
  let fixture: ComponentFixture<Sub1ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sub1ServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub1ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
