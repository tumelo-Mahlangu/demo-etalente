import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalDisplayDetailsComponent } from './modal-display-details/modal-display-details.component';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree'
import { DEPARTMENT_TREE } from '../_mockData';
import { departmentNode } from '../_mockData';

export interface configureData{
  name: string;
}
interface childNodeInfoDepartment{
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  numberOfTeamsDepartment: number = 0;
  name: string;
  title : string = "Departments";

  private _transfomer = (listDepartment: departmentNode, level: number) => {
    return {
      expandable: !!listDepartment.typeOfDepartment,
      name: listDepartment.nameOfDepartment,
      level: level
    }
  }

  treeControl = new FlatTreeControl<childNodeInfoDepartment>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transfomer,
    node => node.level,
    node => node.expandable,
    node => node.typeOfDepartment,
  );
  
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor(public modal: MatDialog) { 
    this.dataSource.data = DEPARTMENT_TREE;
  }

  hasChild = (_:number, departments: childNodeInfoDepartment) => departments.expandable;
  ngOnInit(): void {
    
  }

  public addDetailsOfDepartment(): void{
    const modalRef = this.modal.open(ModalDisplayDetailsComponent, {
      width: '500px',
      data: {name : this.name}
    });


    modalRef.afterClosed().subscribe(result =>{
      this.name = result;
    })
  }

}
