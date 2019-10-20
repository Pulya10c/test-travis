import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-control-panel',
	templateUrl: './control-panel.component.html',
	styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit, OnChanges {
	public searchValue: string;

	constructor(private router: Router) {}

	public onClickAddCourse(): void {
		this.router.navigate(['courses/new-course']);
	}

	ngOnInit(): void {}

	ngOnChanges(): void {
		console.log(this.searchValue);
	}

	public onSearch(event: string): void {
		console.log(event);
	}

	public onClickSearch(): void {
		console.log(this.searchValue);
	}
}
