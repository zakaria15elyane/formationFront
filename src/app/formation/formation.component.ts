import { Component, OnInit, ViewChild,AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
import { FormationService } from '../service/formation.service';
import { Formation } from '../formation';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataExampleDialogComponent } from '../dialog-data-example-dialog/dialog-data-example-dialog.component';
import { VoirFormationComponent } from '../voir-formation/voir-formation.component';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',

  styleUrls: ['./formation.component.css']
})

export class FormationComponent implements OnInit  {
  Formation = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private formationService:FormationService,private router:Router,private _snackBar: MatSnackBar,
    public dialog: MatDialog ) { }

  dataSourceFormation= new MatTableDataSource<Formation>();
  displayedColumns: string[] = ['id', 'titre', 'description', 'prix', 'dateDebut', 'dateFin', 'actions'];

  public formations=new MatTableDataSource();
  ngAfterViewInit() {
    this.dataSourceFormation.paginator=this.paginator;
    this.dataSourceFormation.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSourceFormation.paginator=this.paginator;
    this.getAllFormation();
  }
public openSnackBar(message:string,action:string){
  this._snackBar.open(message,action,{
    duration: 10000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    panelClass: ["custom-style"]

  });

}
  getAllFormation(){
    this.formationService.getFormation()
    .subscribe(data=>{
      this.dataSourceFormation = new MatTableDataSource();
      this.dataSourceFormation.data=data;
      this.dataSourceFormation=this.dataSourceFormation;
      this.dataSourceFormation.paginator = this.paginator;
      this.dataSourceFormation.sort=this.sort;
    },error=>{
      console.log(error);
    });
  }
  public value:string;
  getSearchFormation(titreFormation:string){

    console.log(titreFormation);
    this.formationService.getSearchFormation(titreFormation)
    .subscribe(data=>{
      if(titreFormation!=null){
        this.dataSourceFormation.data=data;

      }else {
        this.getAllFormation();
      }

      //
      console.log(data);
    },error=>{
      console.log(error);
    });
  }

  deleteFormation(idFormation:any){
    //let conf = confirm("vous voulez vraiment supprimé cet formations");
    //if(conf){

      const confirmDialog = this.dialog.open(DialogDataExampleDialogComponent, {
        data: {
          title: 'Supprimer',
          message: 'vous voulez vraiment supprimé cet formations '
          // + idFormation
        }
      });

      confirmDialog.afterClosed().subscribe(result => {
        if (result === true) {
          //this.Formation = this.Formation.filter(item => item.idFormation !== idFormation.idFormation);
          this.formationService.deleteFormation(idFormation)
          .subscribe(data=>{
            this.getAllFormation();
            this.openSnackBar("formations supprimé avec succés","Fermé");
            console.log(data);
          },error=>{
            console.log(error);
          });
        }
      });

  }
  openDialog() {
    this.dialog.open(VoirFormationComponent);
  }
  public saveFormation(){
    this.router.navigate(['/ajoute-formations']);

  }
   voirFormation(idFormation:any){

    this.router.navigate(['/voir-formations',idFormation]);
    //this.openDialog();
  }

  public updateFormation(idFormation:any){
    this.router.navigate(['/edit-formations',idFormation]);
  }

  exportFormationPdf(){
    this.formationService.exportPdfFormations().subscribe(x=>{
      const blob=new Blob([x],{type:'application/pdf'});
      if(window.navigator && window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data=window.URL.createObjectURL(blob);
      const link=document.createElement('a');
      link.href=data;
      link.download='formations.pdf';
      link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
      setTimeout(function() {
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
    });
  }
}

