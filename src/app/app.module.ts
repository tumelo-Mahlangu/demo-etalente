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
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModalDisplayDetailsComponent } from './components/sidebar/departments/modal-display-details/modal-display-details.component';
import {MatTreeModule} from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserToolBarComponent,
    DepartmentDetailsComponent,
    DepartmentPerformanceComponent,
    DepartmentsComponent,
    ModalDisplayDetailsComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent, DepartmentsComponent]
})
export class AppModule { }
