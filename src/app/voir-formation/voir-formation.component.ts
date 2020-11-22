import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-voir-formation',
  templateUrl: './voir-formation.component.html',
  styleUrls: ['./voir-formation.component.css']
})
export class VoirFormationComponent implements OnInit {

  constructor(private formationService:FormationService,private activatedRoute:ActivatedRoute,private router:Router) { }
  public formations:Formation={
    idFormation:null,
    titreFormation:null,
    description:null,
    prix:null,
    dateDebut:null,
    dateFin:null
  };
  public idFormation:any;

  ngOnInit(): void {
    let idFormation=parseInt(this.activatedRoute.snapshot.paramMap.get('idFormation'));
    this.idFormation=idFormation;
    this.formationService.getOneFormation(this.idFormation).subscribe(data=>{
      this.formations=data;
    })
  }
}
