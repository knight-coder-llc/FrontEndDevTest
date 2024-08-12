import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-generic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormField,
    NgIf
  ],
  templateUrl: './generic-form-component.component.html',
  styleUrls: ['./generic-form-component.component.scss']
})
export class GenericFormComponent implements OnInit {
  @Input() valueName!: string;
  genericForm: FormGroup;
  @Output() formOutput = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.genericForm = this.formBuilder.group({
      value: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.genericForm.valid) {
      const value = this.genericForm.controls['value'].value;
      this.formOutput.emit(value);
    }
  }
}
