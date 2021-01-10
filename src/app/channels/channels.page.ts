import { Observable } from 'rxjs';
import { ChannelsService } from './../services/channels/channels.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage implements OnInit {


	mychannels : any[];

  constructor(public Channelservice : ChannelsService , public router: Router) { }

  ngOnInit() {
		this.Channelservice.getChannels().subscribe(channels =>{
			//console.log(channels ) ;
			this.mychannels = channels;
		//	console.log(this.mychannels ) ;
		});
	}
	goTofilespages(){
		this.router.navigateByUrl('/tabs/tabs/files');
	}

}
