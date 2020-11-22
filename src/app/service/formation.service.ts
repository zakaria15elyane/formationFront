import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
public host:string="http://localhost:8080/v0";
  constructor(private http:HttpClient) { }

  getFormation(){
    return this.http.get<Formation>(this.host+"/formations");
  }
  deleteFormation(idFormation:number){
    return this.http.delete(`${this.host}/formations/${idFormation}`);
  }
  saveFormation(host:any,data:any){
    return this.http.post(host+"/formations",data);
  }

}