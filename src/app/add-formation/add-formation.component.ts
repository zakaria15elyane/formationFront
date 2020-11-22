import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  dateArrival:Date;
  constructor(private formationService:FormationService,private activatedRoute:ActivatedRoute,private router:Router) { }
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
  public ajouteFormation(data:any){
    this.formationService.saveFormation(this.formationService.host,data)
    .subscribe(response=>{
     this.router.navigateByUrl("formations")
     console.log(data);
    }, err => {
      console.log(err);
    });

  }
}
