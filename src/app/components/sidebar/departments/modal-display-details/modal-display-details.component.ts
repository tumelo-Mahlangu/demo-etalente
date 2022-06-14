import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { configureData } from '../departments.component';
import { ConfigUnitsService } from 'src/app/services/config-units.service';
import { BusinessUnit } from '../../_mockData';
import { DepartmentDetailsComponent } from 'src/app/components/main/department-details/department-details.component';

@Component({
  selector: 'app-modal-display-details',
  templateUrl: './modal-display-details.component.html',
  styleUrls: ['./modal-display-details.component.scss']
})
export class ModalDisplayDetailsComponent implements OnInit {
  constructor(
    public modalRef: MatDialogRef<ModalDisplayDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public input: configureData,
    private configuredUnitsService: ConfigUnitsService
    ) { }
  
  ngOnInit(): void {
  }
  getInputData(){
    console.log(this.input);
   
    this.configuredUnitsService.insertUnits(this.input)
    .subscribe(data =>{
      data.next(alert("successfully added a business Unit"));
      data.error(alert(""))
    })
    window.location.reload();
  }
  closeModelOnClick(): void { 
    this.modalRef.close();
  }
}
