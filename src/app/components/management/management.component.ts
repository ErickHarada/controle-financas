import { Component } from '@angular/core';
import { CreateRegistryComponent } from '../create-registry/create-registry.component';
import { RegistryTableComponent } from '../registry-table/registry-table.component';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CreateRegistryComponent, RegistryTableComponent],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent {

}
