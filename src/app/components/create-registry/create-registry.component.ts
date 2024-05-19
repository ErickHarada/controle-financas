import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { expenseCategories, incomeCategories } from '../../consts/categories.const';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RegistryType } from '../../enums/registry-type.enum';

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
export class CreateRegistryComponent implements OnInit {

  categoryList = [];
  createRegistryForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.createRegistryForm = this.buildForm();
  }

  ngOnInit(): void {
    this.subscribeTypeValue();
  }

  subscribeTypeValue(): void {
    this.createRegistryForm.get('type').valueChanges.subscribe((value: number) => {
      this.categoryList = value === RegistryType.INCOME ? incomeCategories : expenseCategories
      const category = this.createRegistryForm.get('category');
      category.enable();
      category.reset()
    })
  }

  create(): void { }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      type: [null, [Validators.required]],
      category: [{disabled: true, value: null}, [Validators.required]],
      value: [null, [Validators.required]]
    });
  }
}
