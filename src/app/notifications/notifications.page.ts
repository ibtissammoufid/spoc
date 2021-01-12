import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  goTomsgpages(){
		this.router.navigateByUrl('/tabs/tabs/messages');
  }
  
  goToAssignmentpages(){
		this.router.navigateByUrl('/tabs/tabs/assignments');
  }
  
  goTofilespages(){
		this.router.navigateByUrl('/tabs/tabs/files');
  }
  
  goTocanalspages(){
    this.router.navigateByUrl('channels');
  }

}
