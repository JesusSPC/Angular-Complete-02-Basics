import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = true;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  passwordDisplayed = false;
  passwordClicks = [];

  username = '';
  constructor() {
    setTimeout(() => this.allowNewServer = !this.allowNewServer, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    if (!this.serverName) return;
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(ev: any) {
    this.serverName = ev.target.value;
  }

  onRemoveField() {
    this.username = '';
  }

  onDisplayPassword() {
    this.passwordDisplayed = !this.passwordDisplayed;
    this.passwordClicks.push(new Date());
  }
}
