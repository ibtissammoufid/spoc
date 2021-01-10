import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../services/assignments/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage implements OnInit {

	myassignments : any[];

  constructor(public assignmentsservice : AssignmentsService ) { }
  ngOnInit() {
		this.assignmentsservice.getAssignments().subscribe(assignments =>{
			//console.log(channels ) ;
			this.myassignments = assignments;
		//	console.log(this.mychannels ) ;
		});
	}



}
