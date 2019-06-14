import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDestination } from './destination.model';
import { IActivity } from '../activity/activity/activity.model';

@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
	destination: IDestination;
	activities:  Array<IActivity>;
	get bgImg() { return `url('${this.destination.bg}')`; }
	constructor(
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		/*this.route.data
		.subscribe((data: { destination: IDestination }) => {
			this.destination = data.destination;
		});*/
		

		this.route.data
		.subscribe((data) => {
			this.destination = data.destination[0];
			this.activities = data.destination[1];
			console.log(data);
			console.log(this.destination);
			console.log(this.activities);
		});
	}
}
