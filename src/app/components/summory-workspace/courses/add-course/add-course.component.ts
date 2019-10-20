import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-course',
	templateUrl: './add-course.component.html',
	styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
	public newCourseForm: FormGroup;

	constructor(public router: Router, public newCourseFormBuilder: FormBuilder) {}

	public isControlInvalid(controlName: string): boolean {
		const control: any = this.newCourseForm.controls[controlName];
		const result: boolean = control.invalid && control.touched;
		return result;
	}

	public onSubmit(): void {
		if (this.newCourseForm.invalid) {
			this.newCourseForm.markAllAsTouched();
			return;
		}

		this.router.navigate(['courses']);
	}

	public onCancel(): void {
		this.router.navigate(['courses']);
	}

	ngOnInit(): void {
		this.newCourseForm = this.newCourseFormBuilder.group({
			title: ['', [Validators.required, Validators.minLength(5)]],
			description: ['', [Validators.required, Validators.minLength(15)]],
			duration: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(2)]],
			date: ['', [Validators.required]],
			authors: ['', [Validators.required, Validators.pattern(/^[A-zА-я -]*$/), Validators.minLength(7)]],
		});
	}
}
