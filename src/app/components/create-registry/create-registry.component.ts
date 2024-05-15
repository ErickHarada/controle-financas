import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { categories } from '../../consts/categories.const';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-registry',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgFor
  ],
  templateUrl: './create-registry.component.html',
  styleUrl: './create-registry.component.scss'
})
export class CreateRegistryComponent {

  categoryList = categories;
  createRegistryForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.createRegistryForm = this.buildForm();
  }

  create(): void { }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      type: [null, [Validators.required]],
      category: [null, [Validators.required]],
      value: [null, [Validators.required]]
    });
  }
}
