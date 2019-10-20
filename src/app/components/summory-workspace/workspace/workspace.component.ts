import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, Navigation } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
	public navigationPathValue: string;

	constructor(public router: Router) {}

	ngOnInit(): void {
		this.navigationPathValue = this.router.url.replace('/', '');
		this.router.events.pipe(distinctUntilChanged()).subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.navigationPathValue = event.url.replace('/', '');
			}
		});
	}
}
