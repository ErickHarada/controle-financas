import { Component } from '@angular/core';
import { CreateRegistryComponent } from '../create-registry/create-registry.component';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CreateRegistryComponent],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent {

}
