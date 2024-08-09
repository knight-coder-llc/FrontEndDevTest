import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { IdFormComponent } from "../id-form/id-form.component";
import { Router } from '@angular/router';

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
    IdFormComponent
  ]
})
export class ReadMeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleIdSubmit(id: string): void {
    this.router.navigate([`/budget-codes/${id}`]).then(r => null);
  }

  title="DevTest"
}
