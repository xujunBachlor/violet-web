import { AhriComponent } from './../ahri/ahri.component';
import { VioletComponent } from './../violet/violet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

const router: Routes = [{
  path: 'ahri', component: AhriComponent
},{
  path: 'violet', component: VioletComponent
},{
  path: '', redirectTo: 'violet', pathMatch: 'full'
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouteModule { }
