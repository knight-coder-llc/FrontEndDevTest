import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormComponent } from './generic-form-component.component';

describe('GenericFormComponentComponent', () => {
  let component: GenericFormComponent;
  let fixture: ComponentFixture<GenericFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
