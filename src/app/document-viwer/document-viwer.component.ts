import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyDocumentsGetModel } from '../service/models/my-documents.model';

@Component({
  selector: 'sevenx-document-viwer',
  templateUrl: './document-viwer.component.html',
  styleUrls: ['./document-viwer.component.scss']
})
export class DocumentViwerComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MyDocumentsGetModel
  ) {

  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
