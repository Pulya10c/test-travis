import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/common/models/user.models';
import { createID } from 'src/app/common/helpers/global.helpers';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public user: IUser;

	constructor() {}

	public onClick(): void {
		this.user = {
			id: createID(),
			firstName: 'Alex',
			lastName: 'Seriema',
		};
	}

	public onLogOff(): void {
		this.user = null;
	}

	ngOnInit(): void {}
}
