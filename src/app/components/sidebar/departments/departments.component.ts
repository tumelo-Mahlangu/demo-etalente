
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalDisplayDetailsComponent } from './modal-display-details/modal-display-details.component';
import {ConfigUnitsService} from '../../../services/config-units.service';
import { BusinessUnit } from '../_mockData';
export interface configureData{
  id: number
  name: string;
}

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  numberOfTeamsDepartment: number = 0;
  name: string;
  id: number
  listOfUnits : BusinessUnit[];
  title : string = "Departments";
  constructor(public modal: MatDialog, private configuredUnitsService: ConfigUnitsService) { 
    
  }
  ngOnInit(): void {
    this.getUnitsData();
  }
  
  getUnitsData(){
    this.configuredUnitsService.getUnits()
    .subscribe(data => {
      this.listOfUnits = data;
    }) 
  }

  updateUnits(id:number, name: string):void{
    let currentItem = this.listOfUnits.find(unit => {return unit.id === id})
    console.log(currentItem);
    this.configuredUnitsService.updateUnits(id, name)
  }
  deleteUnits(id: number) : void{
    this.configuredUnitsService.removeUnits(id)
    .subscribe(
      data =>{
      data.next(alert('Successfully deleted'));
      data.error(alert('There was a failer in deleting the items'));
    })
    window.location.reload();
  }

  public addDetailsOfDepartment(): void{
    const modalRef = this.modal.open(ModalDisplayDetailsComponent, {
      width: '500px',
      data: {name : this.name, id: this.id},
    });
    modalRef.afterClosed().subscribe(result =>{
      this.name = result;
    })
  }

}
