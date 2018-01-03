import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientsService} from "../clients/shared/clients.service";
import { AngularFireList} from "angularfire2/database";
import {ClientsModel} from "../clients/shared/clients.model";
import {element} from "protractor";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientsListComponent implements OnInit {

  clientList : ClientsModel[];

  constructor(private clientsService : ClientsService) { }

  ngOnInit() {
    var x = this.clientsService.getData();
    x.snapshotChanges().subscribe(item => {

      this.clientList = [];
      item.forEach(element => {

        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.clientList.push( y as ClientsModel)
      })
    })
  }

  onItemClick(cli : ClientsModel){
    this.clientsService.selectedClient = Object.assign({}, cli);
  }

}
