import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { configureData } from '../departments.component';

@Component({
  selector: 'app-modal-display-details',
  templateUrl: './modal-display-details.component.html',
  styleUrls: ['./modal-display-details.component.scss']
})
export class ModalDisplayDetailsComponent implements OnInit {

  constructor(
    public modalRef: MatDialogRef<ModalDisplayDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: configureData
    ) { }
  
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.modalRef.close();
  }
}
