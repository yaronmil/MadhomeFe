import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnifDetailsComponent } from './snif-details.component';

describe('SnifDetailsComponent', () => {
  let component: SnifDetailsComponent;
  let fixture: ComponentFixture<SnifDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnifDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnifDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
