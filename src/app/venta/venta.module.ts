import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VentaRoutingModule } from './venta-routing.module';
import { VentaPageComponent } from './pages/venta-page/venta-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './mensajes/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    VentaPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule,
    MaterialModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class VentaModule { }
