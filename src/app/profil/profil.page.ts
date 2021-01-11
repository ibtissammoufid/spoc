import { ProfilService } from './../services/profil/profil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  myprofil : any[];

  constructor(public profilservice : ProfilService ) { }
  ngOnInit() {
		this.profilservice.getMessages().subscribe(profil =>{
			//console.log(channels ) ;
			this.myprofil = profil;
		//	console.log(this.mychannels ) ;
		});
	}

}
