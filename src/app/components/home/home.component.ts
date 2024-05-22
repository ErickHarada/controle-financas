import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { TotalBalanceComponent } from '../total-balance/total-balance.component';
import { Month } from '../../enums/month.enum';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, NavbarComponent, MatCardModule, TotalBalanceComponent, MatExpansionModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  month = Month[new Date().getMonth() + 1];
  monthList = [];
}
