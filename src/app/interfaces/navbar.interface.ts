export interface NavbarNode {
    name: string;
    icon: string;
    link: string;
    children?: NavbarNode[];
}

export interface NavbarFlatNode {
    expandable: boolean;
    name: string;
    level: number;
    icon: string;
    link: string;
  }