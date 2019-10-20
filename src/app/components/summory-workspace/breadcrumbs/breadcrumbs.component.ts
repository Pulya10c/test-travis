import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnChanges {
	@Input() public navigationPathValue: string;

	public pathNames: string[] = [];

	constructor() {}

	ngOnChanges(): void {
		this.pathNames = this.navigationPathValue.split('/').map(el => el[0].toUpperCase() + el.slice(1));
	}
}
