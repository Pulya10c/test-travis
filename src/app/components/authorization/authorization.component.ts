import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/common/models/user.models';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-authorization',
	templateUrl: './authorization.component.html',
	styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
	@Output() public newUser: EventEmitter<IUser> = new EventEmitter<IUser>();

	public authorizationForm: FormGroup;
	public isValidForm: boolean = false;

	constructor(public router: Router, public loginFormBuilder: FormBuilder) {}

	public isControlInvalid(controlName: string): boolean {
		const control: any = this.authorizationForm.controls[controlName];
		const result: boolean = control.invalid && control.touched;
		return result;
	}

	public onSubmit(): void {
		if (this.authorizationForm.invalid) {
			this.authorizationForm.markAllAsTouched();
			this.isValidForm = true;
			return;
		}
		this.isValidForm = false;
		this.router.navigate(['courses']);
	}

	ngOnInit(): void {
		this.authorizationForm = this.loginFormBuilder.group({
			firstName: ['', [Validators.required, Validators.pattern(/^[A-zА-я -]*$/), Validators.minLength(2)]],
			lastName: ['', [Validators.required, Validators.pattern(/^[A-zА-я -]*$/), Validators.minLength(2)]],
			email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
			password: ['', [Validators.required, Validators.minLength(7)]],
		});
	}
}
