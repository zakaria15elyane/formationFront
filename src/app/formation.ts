import { DatePipe } from '@angular/common';

export class Formation {
  idFormation:number;
  titreFormation:string;
  description:string;
  prix:string;
  dateDebut:DatePipe;
  dateFin:Date;
}
