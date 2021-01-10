import { ChannelsPage } from './../../channels/channels.page';


import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ChannelsService {




	constructor( private afs : AngularFirestore) {
	 }

	 getChannels(){
		 return this.afs.collection('canals').valueChanges();
	 }

}


