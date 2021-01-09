import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateSelectorComponent } from './plate-selector.component';

describe('PlateSelectorComponent', () => {
  let component: PlateSelectorComponent;
  let fixture: ComponentFixture<PlateSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#provideDataForDrawingPlate(wells: number) should provide drawing data correctly', () => {
    it('#provideDataForDrawingPlate(6) should set rows: 2 and columns: 3 (2 x 3)', () => {
      component.provideDataForDrawingPlate(6);
      expect(component.rows).toBe(2);
      expect(component.columns).toBe(3);
    });

    it('#provideDataForDrawingPlate(12) should set rows: 3 and columns: 4 (3 x 4)', () => {
      component.provideDataForDrawingPlate(12);
      expect(component.rows).toBe(3);
      expect(component.columns).toBe(4);
    });

    it('#provideDataForDrawingPlate(24) should set rows: 4 and columns: 6 (4 x 6)', () => {
      component.provideDataForDrawingPlate(24);
      expect(component.rows).toBe(4);
      expect(component.columns).toBe(6);
    });

    it('#provideDataForDrawingPlate(48) should set rows: 6 and columns: 8 (6 x 8)', () => {
      component.provideDataForDrawingPlate(48);
      expect(component.rows).toBe(6);
      expect(component.columns).toBe(8);
    });

    it('#provideDataForDrawingPlate(96) should set rows: 8 and columns: 12 (8 x 12)', () => {
      component.provideDataForDrawingPlate(96);
      expect(component.rows).toBe(8);
      expect(component.columns).toBe(12);
    });

    it('#provideDataForDrawingPlate(384) should set rows: 16 and columns: 24 (16 x 24)', () => {
      component.provideDataForDrawingPlate(384);
      expect(component.rows).toBe(16);
      expect(component.columns).toBe(24);
    });
  });
});