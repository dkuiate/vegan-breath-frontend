import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganDetailsComponent } from './vegan-details.component';

describe('VeganDetailsComponent', () => {
  let component: VeganDetailsComponent;
  let fixture: ComponentFixture<VeganDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeganDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeganDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
