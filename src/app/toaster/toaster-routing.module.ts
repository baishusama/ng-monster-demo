import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToasterComponent } from './toaster.component';

const routes: Routes = [
  {
    path: '',
    component: ToasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToasterRoutingModule {}
