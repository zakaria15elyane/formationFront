import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {

  constructor(private formationService:FormationService,private activatedRoute:ActivatedRoute,private router:Router,
    private _snackBar: MatSnackBar) { }
  public formations:Formation={
    idFormation:null,
    titreFormation:null,
    description:null,
    prix:null,
    dateDebut:null,
    dateFin:null
  }

  public fomation:any;
  public idFormation:any;

    ngOnInit(): void {
      let idFormation=parseInt(this.activatedRoute.snapshot.paramMap.get('idFormation'));
    this.idFormation=idFormation;
    this.formationService.getOneFormation(this.idFormation)
    .subscribe(data=>{
      this.formations=data;
    },error=>{
      console.log(error);
    });
    }
    public openSnackBar(message:string,action:string){
      this._snackBar.open(message,action,{
        duration: 10000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ["custom-style"]

      })};
   updateFormation(value: any){
     console.log(value);
    this.formationService.updateFormation(this.idFormation,value)
    .subscribe(data=>{
      this.openSnackBar("formations modifié avec succées","Fermé");
       this.router.navigate(['formations']);
    },error=>{
      console.log("error");
    });

  }

}
