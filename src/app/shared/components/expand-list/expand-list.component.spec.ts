import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandListComponent } from './expand-list.component';

describe('ExpandListComponent', () => {
  let component: ExpandListComponent;
  let fixture: ComponentFixture<ExpandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
