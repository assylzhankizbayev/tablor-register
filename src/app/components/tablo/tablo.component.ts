import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-tablo',
  templateUrl: './tablo.component.html',
  styleUrls: ['./tablo.component.scss']
})
export class TabloComponent implements OnInit {

  constructor(private webSocket: WebSocketService) { }

  ngOnInit(): void {
    this.webSocket.listen('connect').subscribe( () => console.log('Connection succeeded') );
  }

  addNewUser(): void {
    this.webSocket.emit('registration', '');
  }

}
