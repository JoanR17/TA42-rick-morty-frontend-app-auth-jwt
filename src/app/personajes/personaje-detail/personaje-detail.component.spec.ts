import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeDetailComponent } from './personaje-detail.component';

describe('PersonajeDetailComponent', () => {
  let component: PersonajeDetailComponent;
  let fixture: ComponentFixture<PersonajeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
