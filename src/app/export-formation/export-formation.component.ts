import { Component, OnInit } from '@angular/core';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-export-formation',
  templateUrl: './export-formation.component.html',
  styleUrls: ['./export-formation.component.css']
})
export class ExportFormationComponent implements OnInit {

  constructor(private formationService:FormationService) { }

  ngOnInit(): void {
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
