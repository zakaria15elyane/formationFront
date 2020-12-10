import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
public host:string="http://localhost:8080/v0";
  constructor(private http:HttpClient) { }

  getFormation(){
    return this.http.get<Formation>(this.host+"/formations/titre");
  }

  deleteFormation(idFormation:number){
    return this.http.delete(`${this.host}/formations/${idFormation}`);
  }
  saveFormation(host:any,data:any){
    return this.http.post(host+"/formations",data);
  }
  getOneFormation(id:number){
    return this.http.get<Formation>(this.host+"/formations/"+id);
  }
  getSearchFormation(titreFormation:any){
    return this.http.get<Formation>(this.host+"/formations/titre/"+titreFormation);
  }
  updateFormation(idFormation,data: any){
    return this.http.put(this.host+"/formations/"+idFormation,data);
  }
  exportPdfFormations():Observable<Blob>{
    return this.http.get(`${this.host}/exportpdf`,{responseType:'blob'});
  }

  }


