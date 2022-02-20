import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPointComponent } from './track-point.component';

describe('TrackPointComponent', () => {
  let component: TrackPointComponent;
  let fixture: ComponentFixture<TrackPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
