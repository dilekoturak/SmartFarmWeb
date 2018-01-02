import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientsService} from "../clients/shared/clients.service";
import { AngularFireList} from "angularfire2/database";
import {ClientsModel} from "../clients/shared/clients.model";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientsListComponent implements OnInit {

  clientList : AngularFireList<ClientsModel>;

  constructor(private clientsService : ClientsService) { }

  ngOnInit() {
    this.clientsService.getData();
  }

}
