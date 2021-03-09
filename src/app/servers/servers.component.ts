import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server has been created';
  private toggle = false;
  public serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

   }

  ngOnInit(): void {
  }

  public onCreateServer(): void {

    this.serverCreationStatus = 'Server has been created. Its name is: ' + this.serverName;

  }

  public onUpdateServerName(event: any): void {
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
