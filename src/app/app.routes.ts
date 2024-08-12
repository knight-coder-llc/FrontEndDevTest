import { Routes } from '@angular/router';
import { BudgetCodesComponent } from "./budget-codes/budget-codes.component";
import { ReadMeComponent } from "./read-me/read-me.component";

export const routes: Routes = [
  { path: '', component: ReadMeComponent },
  { path: 'budget-codes', component: BudgetCodesComponent },
  { path: 'budget-codes/id/:id', component: BudgetCodesComponent },
  { path: 'budget-codes/year/:year', component: BudgetCodesComponent },
  { path: 'budget-codes/code/:budgetCode', component: BudgetCodesComponent }
];
