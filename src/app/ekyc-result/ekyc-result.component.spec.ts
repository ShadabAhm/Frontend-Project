import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkycResultComponent } from './ekyc-result.component';

describe('EkycResultComponent', () => {
  let component: EkycResultComponent;
  let fixture: ComponentFixture<EkycResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkycResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkycResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
