import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages/messages.service';
import { Router } from '@angular/router';




//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/firestore';

//Import Component for the update function and the Modal controller to handle the component.




@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  mymessages : any[];

  records: { id: string; description: string; amount: string; type: string; }[];
  addrecord: {type: string ; description: string; amount: string};   

  constructor(public messageservice : MessagesService, public router: Router, private firestore: AngularFirestore,) { }
  ngOnInit() {
    this.addrecord = {type :'', description :'', amount: ''} 
		this.messageservice.getMessages().subscribe(messages =>{
			//console.log(channels ) ;
			this.mymessages = messages;
		//	console.log(this.mychannels ) ;
		});
  }
  
  refreshPage() {
    window.location.reload();
}

goTocanalspages(){
  this.router.navigateByUrl('channels');
}


AddRecord(description){
  let addrecord = {}
  let date=new Date();
 
  let today_date = (date.getMonth()+1).toString()+'-'+date.getDate().toString()+'-'+date.getFullYear().toString()+'  '+date.getHours().toString()+':'+date.getMinutes().toString();
  addrecord['name'] = 'Zeroual Najlae'
  addrecord['content'] = description
  addrecord['date'] = today_date 
  console.log(addrecord)
  this.firestore.collection('/message/').add(addrecord).then(()=>{
    this.addrecord = {type :'', description :'', amount: ''} 
  })
}

}
