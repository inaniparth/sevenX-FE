import { Component, OnInit } from '@angular/core';
import { MyDocumentsService } from 'src/app/service/api/my-documents.service';
import { MyDocumentsGetModel } from 'src/app/service/models/my-documents.model';

@Component({
  selector: 'sevenx-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.scss']
})
export class MyDocumentsComponent implements OnInit {

  userDocuments: MyDocumentsGetModel[] = [];

  constructor(
    private myDocumentsService: MyDocumentsService
  ) {

  }

  ngOnInit(): void {
    this.loadDocumentsForUser();
  }

  loadDocumentsForUser() {
    // this.myDocumentsService.get()
    //   .subscribe((response) => {
    //     if (response && response.data && response.status === 200 && response.data.documents && response.data.documents.length) {
    //       this.userDocuments = response.data.documents.map((oDocument) => {
    //         return new MyDocumentsGetModel().toLocal(oDocument);
    //       });
    //     }
    //   });
    const document = new MyDocumentsGetModel().toLocal({
      documentFor: "Profile",
      documentTitle: "Ankit",
      // documentURL: "https://7xstartup.in/sevenX/documents?name=Documents_1631269469457.pdf",
      documentURL: "https://7xstartup.in/sevenX/documents?name=Documents_1631273993701.octet-stream",
      userId: 3
    })
    this.userDocuments = [document]
  }

}
