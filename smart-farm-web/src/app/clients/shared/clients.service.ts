import { Injectable } from '@angular/core';
import {ClientsModel} from "./clients.model";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Injectable()
export class ClientsService {

  clientsList : AngularFireList<any>;
  selectedClient : ClientsModel = new ClientsModel();
  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.clientsList = this.firebase.list('clients');
    return this.clientsList;
  }

  insertClient(client : ClientsModel){
    this.clientsList.push({
      name : client.name,
      email : client.email,
      phone : client.phone,
      address : client.address
    })

  }

  updateClient(cli : ClientsModel){
    this.clientsList.update(cli.$key, {
      name : cli.name,
      email : cli.email,
      phone : cli.phone,
      address : cli.address
    })
  }

  deleteClient(key : string){

    this.clientsList.remove(key);
  }
}
