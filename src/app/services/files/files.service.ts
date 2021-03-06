import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

	constructor(private afs : AngularFirestore) { }

	getFiles(){
		return this.afs.collection('files').valueChanges();
	}

}
