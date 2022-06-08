import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDisplayDetailsComponent } from './modal-display-details.component';

describe('ModalDisplayDetailsComponent', () => {
  let component: ModalDisplayDetailsComponent;
  let fixture: ComponentFixture<ModalDisplayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDisplayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDisplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
