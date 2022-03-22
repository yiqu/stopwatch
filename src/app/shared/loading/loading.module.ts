import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModuleBundle } from '../material-bundle';
import { LoadingBarComponent } from '../loading-bar/loading-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModuleBundle
  ],

  exports: [
    LoadingComponent,
    LoadingBarComponent
  ],

  declarations: [
    LoadingComponent,
    LoadingBarComponent
  ],

  providers: [

  ],
})
export class LoadingModule { }
