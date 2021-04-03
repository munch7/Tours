import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisumuComponent } from './kisumu.component';

describe('KisumuComponent', () => {
  let component: KisumuComponent;
  let fixture: ComponentFixture<KisumuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KisumuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KisumuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
