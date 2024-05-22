import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

  
@Component({
  selector: 'app-read-me',
  templateUrl: './read-me.component.html',
  styleUrls: ['./read-me.component.css'],
  standalone: true,
  imports: [
      MatExpansionModule,
      MatButtonModule,
      MatCardModule,
      CommonModule
    ]
})
export class ReadMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="DevTest"
}
