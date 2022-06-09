export interface departmentNode{
    nameOfDepartment: string;
    typeOfDepartment?: departmentNode[];
}
  
export const DEPARTMENT_TREE : departmentNode[] = [
    {
      nameOfDepartment: 'Team',
      typeOfDepartment: [{nameOfDepartment : 'Software'}, {nameOfDepartment : 'Markerting'}]
    },
    {
      nameOfDepartment: 'Business Unit',
      typeOfDepartment: [{nameOfDepartment : 'Momentum'}, {nameOfDepartment : 'SARS'}]
    },
    {
      nameOfDepartment: 'Departments',
      typeOfDepartment: []
    }
];