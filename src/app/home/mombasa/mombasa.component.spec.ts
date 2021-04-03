import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MombasaComponent } from './mombasa.component';

describe('MombasaComponent', () => {
  let component: MombasaComponent;
  let fixture: ComponentFixture<MombasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MombasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MombasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
