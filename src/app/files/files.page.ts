import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files/files.service';
import { Router } from '@angular/router';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {

	myfiles : any[];
  constructor(public filesservice : FilesService, public router: Router) { }

  ngOnInit() {
		this.filesservice.getFiles().subscribe(files =>{
			//console.log(channels ) ;
			this.myfiles = files;
		//	console.log(this.mychannels ) ;
		});
  }
  downloadPdf(pdfUrl: string, pdfName: string ) {
    //const pdfUrl = './assets/sample.pdf';
    //const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  goTocanalspages(){
    this.router.navigateByUrl('channels');
  }

}
