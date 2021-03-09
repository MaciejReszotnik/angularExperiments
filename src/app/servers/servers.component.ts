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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

   }

  ngOnInit(): void {
  }

  public onCreateServer(): void {
    if (!this.toggle) {
      this.serverCreationStatus = 'Server has been created';
    } else {
      this.serverCreationStatus = 'No server has been created';
    }
    this.toggle = !this.toggle;
  }

}
