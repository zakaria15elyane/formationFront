import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../service/formation.service';


@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css'],
})
export class AddFormationComponent implements OnInit {


  constructor(private formationService:FormationService,private activatedRoute:ActivatedRoute,private router:Router,
    private _snackBar: MatSnackBar) { }
public formations:Formation={
  idFormation:null,
  titreFormation:null,
  description:null,
  prix:null,
  dateDebut:null,
  dateFin:null
};
  ngOnInit(): void {
  }
  public openSnackBar(message:string,action:string){
    this._snackBar.open(message,action,{
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ["custom-style"]

    })};
  formation=new FormGroup({
    titreFormation:new FormControl('',
    [
      Validators.required,
      Validators.minLength(4)
    ]),
    description:new FormControl('',
    [
      Validators.required,
      Validators.minLength(4)
    ]),
    prix:new FormControl('',
    [
      Validators.required,
      Validators.minLength(4)
    ]),
    dateDebut:new FormControl('',
    [
      Validators.required,

    ]),
    dateFin:new FormControl('',
    [
      Validators.required,

    ]),
  });
  resetForm(){
       this.formation.reset();
  }
  get titreFormation(){
    return this.formation.get('titreFormation');
  }
  get description(){
    return this.formation.get('description');
  }
  get prix(){
    return this.formation.get('prix');
  }
  get dateDebut(){
    return this.formation.get('dateDebut');
  }
  get dateFin(){
    return this.formation.get('dateFin');
  }
  public ajouteFormation(data:any){

    this.formationService.saveFormation(this.formationService.host,data)

    .subscribe(response=>{
      console.log(response);
      this.openSnackBar("formations modifié avec succées","Fermé");
      if(response==null){
        console.log("error");



      }else  (this.router.navigateByUrl("formations"));
    },err => {
      console.log("ERROR");
    });


  }
}
