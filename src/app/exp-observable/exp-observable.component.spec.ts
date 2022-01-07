import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpObservableComponent } from './exp-observable.component';

describe('ExpObservableComponent', () => {
  let component: ExpObservableComponent;
  let fixture: ComponentFixture<ExpObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
