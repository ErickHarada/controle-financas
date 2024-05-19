import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RegistryTable } from '../../interfaces/registry-table.interface';

@Component({
  selector: 'app-registry-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './registry-table.component.html',
  styleUrl: './registry-table.component.scss'
})
export class RegistryTableComponent {
  @Input() dataSource: RegistryTable[] =  [
    { type: 'Entrada', category: 'Salário', value: '3000' },
    { type: 'Saída', category: 'Alimentação', value: '32.45' },
    { type: 'Saída', category: 'Entretenimento', value: '80.50' },
  ];
  displayedColumns: string[] = ['type', 'category', 'value'];
}
