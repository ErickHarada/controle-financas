import { Component, DEFAULT_CURRENCY_CODE, Input, LOCALE_ID } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RegistryTable } from '../../interfaces/registry-table.interface';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
    
registerLocaleData(ptBr);
@Component({
  selector: 'app-registry-table',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe, TitleCasePipe],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  templateUrl: './registry-table.component.html',
  styleUrl: './registry-table.component.scss'
})
export class RegistryTableComponent {
  @Input() dataSource: RegistryTable[] = [
    { type: 'Entrada', category: 'Salário', value: '3000' },
    { type: 'Saída', category: 'Alimentação', value: '32.45' },
    { type: 'Saída', category: 'Entretenimento', value: '80.50' },
  ];
  displayedColumns = ['month', 'type', 'category', 'value'];
}
