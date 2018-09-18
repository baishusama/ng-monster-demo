import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToasterRoutingModule } from './toaster-routing.module';
import { ToasterComponent } from './toaster.component';

@NgModule({
  imports: [SharedModule, ToasterRoutingModule],
  declarations: [ToasterComponent]
})
export class ToasterModule {}
