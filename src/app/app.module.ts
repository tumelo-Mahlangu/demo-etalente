import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserToolBarComponent } from './components/sidebar/user-tool-bar/user-tool-bar.component';
import { DepartmentDetailsComponent } from './components/main/department-details/department-details.component';
import { DepartmentPerformanceComponent } from './components/main/department-performance/department-performance.component';
import {MatCardModule} from '@angular/material/card';
import { DepartmentsComponent } from './components/sidebar/departments/departments.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalDisplayDetailsComponent } from './components/sidebar/departments/modal-display-details/modal-display-details.component';
@NgModule({
  declarations: [
    AppComponent,
    UserToolBarComponent,
    DepartmentDetailsComponent,
    DepartmentPerformanceComponent,
    DepartmentsComponent,
    ModalDisplayDetailsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
