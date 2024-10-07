import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetaisComponent } from './editdetais.component';

describe('EditdetaisComponent', () => {
  let component: EditdetaisComponent;
  let fixture: ComponentFixture<EditdetaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdetaisComponent]
    });
    fixture = TestBed.createComponent(EditdetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
