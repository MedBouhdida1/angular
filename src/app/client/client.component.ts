import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit{
  constructor(
    private service:ClientService
  ){

  }
  ngOnInit(): void {
   this.service.getAllClients().subscribe(rslt=>{
    console.log(rslt)
   })
  }

}
