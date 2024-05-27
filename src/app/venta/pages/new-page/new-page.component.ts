
import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-new-page',
  styleUrls: ['./new-page.component.css'],
  templateUrl: './new-page.component.html',
    animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class NewPageComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['producto', 'precio', 'cantidad'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement?: PeriodicElement | null;
}

export interface PeriodicElement {
  producto: string;
  cantidad: number;
  precio: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    cantidad: 1,
    producto: 'Leche Gloria',
    precio: 30.50,
    symbol: 'https://plazavea.vteximg.com.br/arquivos/HS-CATEGORIAS-PG-LECHE-FEBRERO.png',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic precio of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    cantidad: 2,
    producto: 'Bolsa de arroz',
    precio: 2.50,
    symbol: 'https://plazavea.vteximg.com.br/arquivos/HS-CATEGORIAS-PG-ABARROTES-ABRIL-MAYO.png',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    cantidad: 3,
    producto: 'Congelados',
    precio: 7.50,
    symbol: 'https://plazavea.vteximg.com.br/arquivos/HS-CATEGORIAS-PG-CONGELADOS-MAYO.png',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    cantidad: 4,
    producto: 'Licor',
    precio: 6.90,
    symbol: 'https://plazavea.vteximg.com.br/arquivos/HS-CATEGORIAS-PG-LICORES-ABRIL-MAYO.png',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  }
];
