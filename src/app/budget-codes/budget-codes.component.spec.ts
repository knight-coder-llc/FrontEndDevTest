import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCodesComponent } from './budget-codes.component';

describe('BudgetCodesComponent', () => {
  let component: BudgetCodesComponent;
  let fixture: ComponentFixture<BudgetCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetCodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
