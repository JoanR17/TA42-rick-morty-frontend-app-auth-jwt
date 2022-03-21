import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeListComponent } from './personaje-list.component';

describe('PersonajeListComponent', () => {
  let component: PersonajeListComponent;
  let fixture: ComponentFixture<PersonajeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
