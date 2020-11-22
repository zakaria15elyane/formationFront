import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {

  constructor(private formationService:FormationService,private activatedRoute:ActivatedRoute,private router:Router) { }
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

   updateFormation(value: any){
     console.log(value);
    this.formationService.updateFormation(this.idFormation,value)
    .subscribe(data=>{
       this.router.navigate(['formations']);
    },error=>{
      console.log("error");
    });

  }

}
