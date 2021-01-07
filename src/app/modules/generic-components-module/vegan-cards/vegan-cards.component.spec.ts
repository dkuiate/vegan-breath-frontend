import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganCardsComponent } from './vegan-cards.component';

describe('VeganCardsComponent', () => {
  let component: VeganCardsComponent;
  let fixture: ComponentFixture<VeganCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeganCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeganCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
