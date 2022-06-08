import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalDisplayDetailsComponent } from './modal-display-details/modal-display-details.component';

export interface configureData{
  name: string;

}
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  listOfDepartment: string[] = ["Teams", "Business Unit", "Departments"];
  numberOfTeamsDepartment: number = 0;
  name: string;
  title : string = "Departments";
  
  constructor(public modal: MatDialog) { }

  ngOnInit(): void {
    
  }

  expandItems(){
    console.log();
  }
  public addDetailsOfDepartment(): void{
    const modalRef = this.modal.open(ModalDisplayDetailsComponent, {
      width: '500px',
      data: {name : this.name}
    });

    modalRef.afterClosed().subscribe(result =>{
      console.log("This modal was closed!!!!");
      this.name = result;
    })
  }

}
