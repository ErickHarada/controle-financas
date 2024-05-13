import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { NavbarFlatNode, NavbarNode } from '../../interfaces/navbar.interface';
import { TREE_DATA } from '../../consts/navbar/navbar.const';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private _transformer = (node: NavbarNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      icon: node.icon,
      link: node.link
    };
  };

  treeControl = new FlatTreeControl<NavbarFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private readonly router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: NavbarFlatNode) => node.expandable;

  navigateTo(route: string): void {
    this.router.navigate([route])
  }
}
