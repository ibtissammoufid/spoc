import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../services/assignments/assignments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage implements OnInit {

	myassignments : any[];

  constructor(public assignmentsservice : AssignmentsService, public router: Router ) { }
  ngOnInit() {
		this.assignmentsservice.getAssignments().subscribe(assignments =>{
			//console.log(channels ) ;
			this.myassignments = assignments;
		//	console.log(this.mychannels ) ;
		});
	}

	goTocanalspages(){
		this.router.navigateByUrl('channels');
	  }

}
