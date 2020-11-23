import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor(private formationService:FormationService,private router:Router) { }
  displayedColumns: string[] = ['id', 'titre', 'description', 'prix', 'dateDebut', 'dateFin', 'actions'];
  dataSourceFormation;
  public formations:any=[];
  ngOnInit(): void {
    this.getAllFormation();
  }
  getAllFormation(){
    this.formationService.getFormation()
    .subscribe(data=>{
      this.dataSourceFormation = data;
    },error=>{
      console.log(error);
    });
  }
  deleteFormation(idFormation:any){
    let conf = confirm("vous voulez vraiment supprimé cet formations");
    if(conf){
    this.formationService.deleteFormation(idFormation)
    .subscribe(data=>{
      this.getAllFormation();
      console.log(data);
    },error=>{
      console.log(error);
    });
  }}
  public saveFormation(){
    this.router.navigate(['/ajoute-formations']);
  }
   voirFormation(idFormation:any){
    this.router.navigate(['/voir-formations',idFormation]);
  }
  public updateFormation(idFormation:any){
    this.router.navigate(['/edit-formations',idFormation]);
  }
  }


