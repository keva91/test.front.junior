import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { ActivityService } from './activity/activity.service';

@NgModule({
  declarations: [
    ActivityComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
		ActivityService,
  ],
  exports: [
		ActivityComponent,
	]
})
export class ActivityModule { }
