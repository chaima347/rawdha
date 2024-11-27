import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenListeComponent } from './children-liste.component';

describe('ChildrenListeComponent', () => {
  let component: ChildrenListeComponent;
  let fixture: ComponentFixture<ChildrenListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrenListeComponent]
    });
    fixture = TestBed.createComponent(ChildrenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
