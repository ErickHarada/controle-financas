import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManagementComponent } from './components/management/management.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'controle',
        component: ManagementComponent
    }
];
