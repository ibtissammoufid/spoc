import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  mymessages : any[];

  constructor(public messageservice : MessagesService, public router: Router ) { }
  ngOnInit() {
		this.messageservice.getMessages().subscribe(messages =>{
			//console.log(channels ) ;
			this.mymessages = messages;
		//	console.log(this.mychannels ) ;
		});
  }
  
  refreshPage() {
    window.location.reload();
}

goTocanalspages(){
  this.router.navigateByUrl('channels');
}

}
