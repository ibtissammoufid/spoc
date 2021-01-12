import { ProfilService } from './../services/profil/profil.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  myprofil : any[];
  navCtrl: any;

  constructor(public profilservice : ProfilService, public router: Router ) { }
  ngOnInit() {
		this.profilservice.getMessages().subscribe(profil =>{
			//console.log(channels ) ;
			this.myprofil = profil;
		//	console.log(this.mychannels ) ;
		});
  }
  refreshPage() {
    window.location.reload();
}

goTocanalspages(){
  this.router.navigateByUrl('channels');
}

goTologinpages(){
  this.router.navigateByUrl('login');
}

}
