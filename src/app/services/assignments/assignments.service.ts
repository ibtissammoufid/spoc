import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor( private afs : AngularFirestore) {
	}

	getAssignments(){
		return this.afs.collection('assignments').valueChanges();
	}
}
