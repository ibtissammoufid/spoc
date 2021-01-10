import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files/files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {

	myfiles : any[];
  constructor(public filesservice : FilesService) { }

  ngOnInit() {
		this.filesservice.getChannels().subscribe(files =>{
			//console.log(channels ) ;
			this.myfiles = files;
		//	console.log(this.mychannels ) ;
		});
  }

}
