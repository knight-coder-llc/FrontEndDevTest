import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-budget-codes',
  standalone: true,
  imports: [MatTableModule, RouterOutlet],
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

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    const year = this.router.snapshot.paramMap.get('year');
    const budgetCode = this.router.snapshot.paramMap.get('budgetCode');

    if(id) {
      // Append the id to the URL
      const url = `https://uat.trc.eku.edu/budgetcodeexam/api/id/${id}`;

      // Perform the POST request
      this.http.get(url, {}).subscribe({
        next: (data: any) => {
          if (data.results === 'Success') {
            this.dataSource = new MatTableDataSource([data.data]);
          };
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
    } else if(year) {
      const url = `https://uat.trc.eku.edu/budgetcodeexam/api/year/${year}`;

      this.http.get(url, {}).subscribe({
        next: (data: any) => {
          if (data.results === 'Success') {
            this.dataSource = new MatTableDataSource(data.data);
          };
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
    } else if(budgetCode) {
      const url = `https://uat.trc.eku.edu/budgetcodeexam/api/code/${budgetCode}`;

      this.http.get(url, {}).subscribe({
        next: (data: any) => {
          if (data.results === 'Success') {
            this.dataSource = new MatTableDataSource(data.data);
          };
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
    } else {
      this.http.get('https://uat.trc.eku.edu/budgetcodeexam/api/all').subscribe((data:any) => {
        if (data.results === 'Success'){
          this.dataSource = data;
        }
        else
          this.dataSource = data.message;
      })
    }
  }
}
