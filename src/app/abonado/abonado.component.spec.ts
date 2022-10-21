import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonadoComponent } from './abonado.component';

import {MatDialogModule} from '@angular/material/dialog';

describe('AbonadoComponent', () => {
  let component: AbonadoComponent;
  let fixture: ComponentFixture<AbonadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
