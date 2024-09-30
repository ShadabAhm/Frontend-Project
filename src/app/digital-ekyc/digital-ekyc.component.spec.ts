import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalEkycComponent } from './digital-ekyc.component';

describe('DigitalEkycComponent', () => {
  let component: DigitalEkycComponent;
  let fixture: ComponentFixture<DigitalEkycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalEkycComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalEkycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
