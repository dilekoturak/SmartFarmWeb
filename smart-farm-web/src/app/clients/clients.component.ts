import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientsService} from "./shared/clients.service";
import { NgForm} from "@angular/forms";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [ClientsService]
})
export class ClientsComponent implements OnInit {

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form : NgForm){
    if(form.value.$key == null)
      this.clientsService.insertClient(form.value);
    else
      this.clientsService.updateClient(form.value);

    this.resetForm(form);
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();
    this.clientsService.selectedClient = {
      $key : null,
      name : '',
      phone : 0,
      address : '',
      email : ''
    }
  }

  onDelete(form : NgForm){
    if(confirm('Are you sure to delete this record ?') == true){

      this.clientsService.deleteClient(form.value.$key);
      this.resetForm(form);
    }
  }
}
