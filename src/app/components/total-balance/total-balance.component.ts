import { Component, ViewEncapsulation } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-total-balance',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './total-balance.component.html',
  styleUrl: './total-balance.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TotalBalanceComponent {

  single: any[] = [
    {
      "name": "Receita",
      "value": 8940000
    },
    {
      "name": "Despeza",
      "value": 5000000
    }
  ];
  view: [number, number] = [600, 300];
  gradient: boolean = true;

  colorScheme = [{ name: 'Receita', value: '#38A700' }, { name: 'Despeza', value: '#F42C04' }]

}
