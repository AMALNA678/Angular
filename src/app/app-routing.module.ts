import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { DetailsdisplayComponent } from './detailsdisplay/detailsdisplay.component';
import { EditdetaisComponent } from './editdetais/editdetais.component';

const routes: Routes = [
  {path:'',component:DisplayallComponent},
  {path:'alldisply',component:DisplayallComponent},
  {path:'insert',component:InsertComponent},
  {path:'detailswithid/:id',component:DetailsdisplayComponent},
  {path:'edit/:id',component:EditdetaisComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
