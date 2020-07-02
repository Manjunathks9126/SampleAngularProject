import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoozComponentComponent } from './fooz-component.component';

describe('FoozComponentComponent', () => {
  let component: FoozComponentComponent;
  let fixture: ComponentFixture<FoozComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoozComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoozComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
