import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { FormationComponent } from './formation/formation.component';

const routes: Routes = [

  {path:"formations",component:FormationComponent},
  {path:"ajoute-formations",component:AddFormationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
