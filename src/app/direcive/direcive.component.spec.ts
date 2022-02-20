import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireciveComponent } from './direcive.component';

describe('DireciveComponent', () => {
  let component: DireciveComponent;
  let fixture: ComponentFixture<DireciveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireciveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireciveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
