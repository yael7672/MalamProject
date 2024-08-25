import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { PopUpComponent } from './pop-up/pop-up.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { PopUpForImageComponent } from './pop-up-for-image/pop-up-for-image.component';
import { SmartCardComponent } from './smart-card/smart-card.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { MyEmployeesComponent } from './my-employees/my-employees.component';


@NgModule({
    declarations: [
        AppComponent,
        MyEmployeesComponent,
        PopUpComponent,
        UpdateEmployeeComponent,
        DeleteEmployeeComponent,
        PopUpForImageComponent,
        SmartCardComponent,
        SmartTableComponent

    ],
    imports: [
        BrowserModule,
        CommonModule,
        NgxPaginationModule,
        HttpClientModule,
        FormsModule,
        AutocompleteLibModule,
        AppRoutingModule,

    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
