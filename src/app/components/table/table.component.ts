import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  displayedColumns: string[] = ['type', 'category', 'value'];
  dataSource =  [
    { type: 'Entrada', category: 'Salário', value: 3000 },
    { type: 'Saída', category: 'Alimentação', value: 32.45 },
    { type: 'Saída', category: 'Entretenimento', value: 80.50 },
    ];
}
