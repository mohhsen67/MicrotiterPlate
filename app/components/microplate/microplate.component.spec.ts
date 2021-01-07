import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroplateComponent } from './microplate.component';

describe('MicroplateComponent', () => {
  let component: MicroplateComponent;
  let fixture: ComponentFixture<MicroplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
