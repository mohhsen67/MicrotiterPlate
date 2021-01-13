import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'jasmine';
import { MicroplateComponent } from './microplate.component';

describe('MicroplateComponent', () => {
  let component: MicroplateComponent;
  let fixture: ComponentFixture<MicroplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicroplateComponent]
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

  describe('#isNotRangeItem(string)', () => {
    it('#isNotRangeItem("3-9") should return false', () => {
      expect(component.isNotRangeItem('3-9')).toBe(false);
    });

    it('#isNotRangeItem("3") should return true', () => {
      expect(component.isNotRangeItem('3')).toBe(true);
    });

    it('#isNotRangeItem("") should return true', () => {
      expect(component.isNotRangeItem('')).toBe(true);
    });

    it('#isNotRangeItem(",") should return true', () => {
      expect(component.isNotRangeItem('')).toBe(true);
    });
  });

  describe('Evaluation of input box', () => {
    it('Validation should return true for "1, 2, 3"', () => {
      const input = fixture.nativeElement.querySelector('input');

      input.value = '1, 2, 3';
      input.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      expect(component.columns?.status.toLowerCase()).toBe('valid');
    });

    it('Validation should return true for "6, 2-5, 1, 9, 8"', () => {
      const input = fixture.nativeElement.querySelector('input');

      input.value = '6, 2-5, 1, 9, 8';
      input.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      expect(component.columns?.status.toLowerCase()).toBe('valid');
    });

    it('Validation should return false for "4, 2-5, 1, 9, 8"', () => {
      const input = fixture.nativeElement.querySelector('input');

      input.value = '4, 2-5, 1, 9, 8';
      input.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      expect(component.columns?.status.toLowerCase()).toBe('invalid');
    });
  });
});