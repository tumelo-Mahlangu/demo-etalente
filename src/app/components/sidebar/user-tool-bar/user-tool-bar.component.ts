import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tool-bar',
  templateUrl: './user-tool-bar.component.html',
  styleUrls: ['./user-tool-bar.component.scss']
})
export class UserToolBarComponent implements OnInit {
  title : string = "user";
  constructor() { }

  ngOnInit(): void {
  }

}
