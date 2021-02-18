import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core'

@Component({
    // selector: '[app-server]'  <div app-server>
    // selector: '.app-server'  <div class="app-server">
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{

    serverId: number = 101;
    serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online'; 
    }

    getColor(){
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }

} 
