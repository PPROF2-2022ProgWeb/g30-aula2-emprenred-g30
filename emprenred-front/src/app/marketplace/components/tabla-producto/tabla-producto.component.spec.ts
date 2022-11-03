import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProductoComponent } from './tabla-producto.component';

describe('TablaProductoComponent', () => {
  let component: TablaProductoComponent;
  let fixture: ComponentFixture<TablaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
