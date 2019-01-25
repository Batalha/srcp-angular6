import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcpComponent } from './srcp.component';

describe('SrcpComponent', () => {
  let component: SrcpComponent;
  let fixture: ComponentFixture<SrcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
