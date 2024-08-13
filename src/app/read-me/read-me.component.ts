import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {NavigationExtras, Router} from '@angular/router';
import {GenericFormComponent} from "../generic-form-component/generic-form-component.component";

@Component({
  selector: 'app-read-me',
  templateUrl: './read-me.component.html',
  styleUrls: ['./read-me.component.css'],
  standalone: true,
  imports: [
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    GenericFormComponent
  ]
})
export class ReadMeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleIdSubmit(id: { value: string }): void {
    this.router.navigate([`/budget-codes/id/${id.value}`]).then(r => null);
  }

  handleYear(year: {value: string}): void {
    this.router.navigate([`/budget-codes/year/${year.value}`]).then(r => null);
  }

  handleBudget(budgetCode: {value: string}): void {
    this.router.navigate([`/budget-codes/code/${budgetCode.value}`]).then(r => null);
  }

  handleAddBudgetCode(addCode: Object): void {
    const navigationExtras: NavigationExtras = {
      state: addCode
    };

    this.router.navigate([`/budget-codes/add/code`], navigationExtras).then(r => null);
  }
  title="DevTest"
}
