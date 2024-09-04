import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDisplayComponent } from './sample-display.component';

describe('SampleDisplayComponent', () => {
  let component: SampleDisplayComponent;
  let fixture: ComponentFixture<SampleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
