import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdisplayComponent } from './detailsdisplay.component';

describe('DetailsdisplayComponent', () => {
  let component: DetailsdisplayComponent;
  let fixture: ComponentFixture<DetailsdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsdisplayComponent]
    });
    fixture = TestBed.createComponent(DetailsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
