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
  }

  onSubmit(form : NgForm){
    this.clientsService.insertClient(form.value);
  }
}
