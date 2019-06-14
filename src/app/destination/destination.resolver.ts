import { Injectable } from '@angular/core';
import { DestinationService } from './destination.service';
import { ActivityService } from '../activity/activity/activity.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IDestination } from './destination.model';
import { IActivity } from '../activity/activity/activity.model';
import { forkJoin } from 'rxjs';



@Injectable()
export class DestinationResolver implements Resolve <any> {
	constructor(
		protected destinationService: DestinationService,
		protected ActivityService: ActivityService,
	) {}
	resolve(route: ActivatedRouteSnapshot) {
		const id = route.paramMap.get('id');
		//return this.destinationService.getDestinationById(id);
		return forkJoin([
			this.destinationService.getDestinationById(id), 
			this.ActivityService.getactivityById(id)
		])

		
		
	}
}
