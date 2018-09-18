import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NmToasterComponent } from './toaster.component';
import { NmToasterService } from './toaster.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NmToasterComponent],
  exports: [NmToasterComponent],
  providers: [NmToasterService]
})
export class NmToasterModule {}
