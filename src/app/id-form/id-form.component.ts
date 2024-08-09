import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { MatFormField } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-id-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormField
  ],
  templateUrl: './id-form.component.html',
  styleUrl: './id-form.component.scss'
})
export class IdFormComponent implements OnInit {
  idForm: FormGroup;
  @Output() idSubmit = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.idForm = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if(this.idForm.valid) {
      const id = this.idForm.controls['id'].value;
      this.idSubmit.emit(id);
    }
  }
}
