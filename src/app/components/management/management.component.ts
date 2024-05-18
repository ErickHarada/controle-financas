import { Component } from '@angular/core';
import { CreateRegistryComponent } from '../create-registry/create-registry.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CreateRegistryComponent, TableComponent],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent {

}
