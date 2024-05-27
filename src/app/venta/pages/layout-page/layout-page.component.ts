import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Carrito', icon: 'add', url: './new-venta' },
    // { label: 'Buscar', icon: 'search', url: './search' },
  ]
}
