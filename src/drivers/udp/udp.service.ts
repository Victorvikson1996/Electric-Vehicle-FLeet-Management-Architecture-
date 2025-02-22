// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UdpService {}

import { Injectable } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';

@Injectable()
export class UdpDriver {
  @WebSocketServer()
  private server: Server;

  constructor() {
    this.server = new Server({ port: 8080 });
    this.server.on('connection', (ws) => {
      console.log('WebSocket client connected');
      ws.on('message', (message: string) => {
        console.log(`Received: ${message}`);
        this.server.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message);
          }
        });
      });
    });
  }

  public send(message: string): void {
    this.server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }
}
