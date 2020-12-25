import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub2ServiceComponent } from './sub2-service.component';

describe('Sub2ServiceComponent', () => {
  let component: Sub2ServiceComponent;
  let fixture: ComponentFixture<Sub2ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sub2ServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub2ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
