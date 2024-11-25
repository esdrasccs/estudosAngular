import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsubmitComponent } from './btnsubmit.component';

describe('BtnsubmitComponent', () => {
  let component: BtnsubmitComponent;
  let fixture: ComponentFixture<BtnsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnsubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
