import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from "@angular/router";
import {NgIf, Location} from "@angular/common";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-budget-codes',
  standalone: true,
  imports: [MatTableModule, RouterOutlet, NgIf, MatIcon],
  templateUrl: './budget-codes.component.html',
  styleUrl: './budget-codes.component.scss'
})
export class BudgetCodesComponent implements OnInit {
  displayColumns: string[] = [
    'budgetCodeId',
    'fiscalYear',
    'budgetCode',
    'budgetTitle'
  ];
  dataSource:any = [];
  baseUrl = 'https://uat.trc.eku.edu/budgetcodeexam/api';
  constructor(
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation && navigation.extras && navigation.extras.state;

    const id = this.activeRoute.snapshot.paramMap.get('id');
    const year = this.activeRoute.snapshot.paramMap.get('year');
    const budgetCode = this.activeRoute.snapshot.paramMap.get('budgetCode');

    if (state) {
      this.sendPostRequest(state);
    } else if(id) {
      this.sendGetRequest(`id/${id}`);
    } else if(year) {
      this.sendGetRequest(`year/${year}`);
    } else if(budgetCode) {
      this.sendGetRequest(`code/${budgetCode}`);
    } else {
      this.sendGetRequest('all');
    }
  }

  ngOnInit(): void {

  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

  sendPostRequest(state: any) {
    this.http.post(`${this.baseUrl}/add`, state).subscribe({
      next: (data: any) => {
        this.dataSource = data.message;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.dataSource = `There was an error: ${JSON.stringify(error)}`;
      }
    });
  }

  sendGetRequest(path: string) {
    this.http.get(`${this.baseUrl}/${path}`).subscribe({
      next: (data:any) => {
        if (data.results === 'Success'){
          this.dataSource = !Array.isArray(data.data) ? new MatTableDataSource([data.data]) : data.data;
        } else {
          this.dataSource = data.message;
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.dataSource = `There was an error: ${JSON.stringify(error)}`;
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
