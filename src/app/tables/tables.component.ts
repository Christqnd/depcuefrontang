import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../servicios/api/api.service';
import { Router } from "@angular/router";
import { AbonoI } from 'app/models/abono.interface';
import { MatDialog } from '@angular/material/dialog';
// import {MatPaginator} from '@angular/material/paginator';
import { AbonadoComponent } from 'app/abonado/abonado.component';


declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

    // @ViewChild(MatPaginator) paginator: MatPaginator;

    public tableData1: TableData;

    abonos: AbonoI[];

    constructor(private api: ApiService, private router: Router, private dialog: MatDialog) { }

    ngOnInit() {

        if (localStorage.getItem("token")) {
            this.api.validateToken().subscribe(
                data => {

                    console.log('Respuesta de validacion de token:' + data.toString());
                    var response = data.toString();
                    if (response != 'OK') {
                        localStorage.removeItem("token");
                        this.router.navigate(['login']);
                    }

                },
                error => {
                    console.log("Error caught at Subscriber " + error.toString());
                    localStorage.removeItem("token");
                    this.router.navigate(['login']);
                },
                () => console.log("Processing Complete.")
            );
        }


        this.api.getAllAbonos().subscribe(
            data => {
                // console.log(data);
                // this,this.tableData1.dataRows=data.;
                data.forEach(a => {
                    var typesOfList: string[] = [a.id.toString(), a.nombres, a.cedula, a.correo, a.telefono, a.direccion, a.tipo, a.codigoAbono, a.localidad, a.asiento];
                    this.tableData1.dataRows = [...this.tableData1.dataRows, typesOfList];
                });
            },
            error => {
                console.log("Error caught at Subscriber " + error)
            },
            () => console.log("Processing Complete.")
        );
        //   this.tableData1 = {
        //       headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
        //       dataRows: [
        //           ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
        //           ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
        //           ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
        //           ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
        //           ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
        //           ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
        //       ]
        //   };

        this.tableData1 = {
            headerRow: ['Id', 'Nombres', 'Cedula', 'Correo', 'Telefono', 'Direccion', 'Tipo', 'Codigo de Abono', 'Localidad', 'Asiento'],
            dataRows: [
                // ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout', 'Niger', 'Oud-Turnhout', 'Niger', 'Oud-Turnhout'],
                // ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas', 'Niger', 'Oud-Turnhout', 'Niger', 'Oud-Turnhout'],
                // ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux', 'Niger', 'Oud-Turnhout', 'Niger', 'Oud-Turnhout'],
                // ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park', 'Niger', 'Oud-Turnhout', 'Niger', 'Oud-Turnhout'],
                // ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', 'Niger', 'Oud-Turnhout', 'Niger', 'Oud-Turnhout'],
                // ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester', 'Niger', 'Oud-Turnhout', 'Niger', 'Oud-Turnhout']
            ]
        };
    }

    openDialog() {
        const dialogRef = this.dialog.open(AbonadoComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

}


