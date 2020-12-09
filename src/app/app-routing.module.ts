import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
import { Error404Component } from './error404/error404.component';
import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';

import { VoirFormationComponent } from './voir-formation/voir-formation.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:"formations",component:FormationComponent},
  {path:"ajoute-formations",component:AddFormationComponent},
  {path:"edit-formations/:idFormation",component:EditFormationComponent},
  //{path:"search-formations/:titreFormation",component:SearchFormationComponent},
  {path:"voir-formations/:idFormation",component:VoirFormationComponent},

  {path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
