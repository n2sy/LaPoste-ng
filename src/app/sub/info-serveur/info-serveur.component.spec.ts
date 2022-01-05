import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoServeurComponent } from './info-serveur.component';

describe('InfoServeurComponent', () => {
  let component: InfoServeurComponent;
  let fixture: ComponentFixture<InfoServeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoServeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
