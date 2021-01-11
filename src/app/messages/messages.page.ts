import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  mymessages : any[];

  constructor(public messageservice : MessagesService ) { }
  ngOnInit() {
		this.messageservice.getMessages().subscribe(messages =>{
			//console.log(channels ) ;
			this.mymessages = messages;
		//	console.log(this.mychannels ) ;
		});
	}

}
