import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService, Client } from './../../service/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../mensajes/dialog/dialog.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
      console.log(this.clients);
    }, error => {
      console.error('Error fetching clients:', error);
    });
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
