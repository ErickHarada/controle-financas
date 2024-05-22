import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { expenseCategories, incomeCategories } from '../../consts/categories.const';
import { NgClass, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RegistryType } from '../../enums/registry-type.enum';
import { registryType } from '../../consts/registry-type.const';
import { months } from '../../consts/months.const';
import { Month } from '../../enums/month.enum';
import { NgxCurrencyDirective } from 'ngx-currency';

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
    NgFor,
    NgClass,
    NgxCurrencyDirective
  ],
  templateUrl: './create-registry.component.html',
  styleUrl: './create-registry.component.scss'
})
export class CreateRegistryComponent implements OnInit {
  @Output() created = new EventEmitter();

  registryType = registryType;
  monthList = months;
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

  create(): void {
    const value = this.createRegistryForm.value;
    this.created.emit({
      type: this.registryType.find(t => t.id === value.type).name,
      month: value.month,
      category: value.category.name,
      value: value.value
    })
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      type: [null, [Validators.required]],
      month: [Month[new Date().getMonth() + 1].toLocaleLowerCase(), [Validators.required]],
      category: [{ disabled: true, value: null }, [Validators.required]],
      value: [null, [Validators.required]]
    });
  }
}
