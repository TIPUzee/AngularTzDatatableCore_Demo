import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";

// Package imports
import { TzDatatable } from "angular-tz-datatable-core";

// Your data, datatype and columns
import { data, UserType, columns } from "./data";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [NgIf, FormsModule],
})
export class AppComponent
{
    protected readonly dt: TzDatatable<UserType> = new TzDatatable();
    protected searchValue: string = '';
    
    
    constructor()
    {
        this.dt.initColsConfig(columns);
        this.dt.setData(data);
    }
}
