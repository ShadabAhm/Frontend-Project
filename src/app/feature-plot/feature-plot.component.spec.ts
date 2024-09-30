import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePlotComponent } from './feature-plot.component';

describe('FeaturePlotComponent', () => {
  let component: FeaturePlotComponent;
  let fixture: ComponentFixture<FeaturePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
