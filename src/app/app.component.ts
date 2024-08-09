import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReadMeComponent } from './read-me/read-me.component';
import { BudgetCodesComponent } from "./budget-codes/budget-codes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    ReadMeComponent,
    BudgetCodesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FrontEndDevTest';
}
