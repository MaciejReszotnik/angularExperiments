import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    public getServerStatus(): string {
        return this.serverStatus;
    }

    public getColor(): string {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}