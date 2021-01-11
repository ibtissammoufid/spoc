import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor( private afs : AngularFirestore) {
	}

	getMessages(){
		return this.afs.collection('message').valueChanges();
	}
}
