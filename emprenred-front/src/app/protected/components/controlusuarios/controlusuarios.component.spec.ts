import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlusuariosComponent } from './controlusuarios.component';

describe('ControlusuariosComponent', () => {
  let component: ControlusuariosComponent;
  let fixture: ComponentFixture<ControlusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlusuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
