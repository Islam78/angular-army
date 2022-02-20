import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemParentComponent } from './item-parent.component';

describe('ItemParentComponent', () => {
  let component: ItemParentComponent;
  let fixture: ComponentFixture<ItemParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
