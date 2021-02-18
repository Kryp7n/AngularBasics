import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = true;
  serverName = '';
  serverCreated = false;
  serverCreationStatus = "No server yet.";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = false;
    },2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "New Server added with name:" + this.serverName;
  }

  onNameInput(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }


}
