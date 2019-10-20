import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { ICourse } from 'src/app/common/models/course.models';
import { CoursesService } from 'src/app/common/services/courses.service';

@Component({
	selector: 'app-edit-course',
	templateUrl: './edit-course.component.html',
	styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
	public editCourseForm: FormGroup;
	public editeCourse: ICourse;

	constructor(public router: Router, public courseService: CoursesService, public newCourseFormBuilder: FormBuilder) {}

	public isControlInvalid(controlName: string): boolean {
		const control: any = this.editCourseForm.controls[controlName];
		const result: boolean = control.invalid && control.touched;
		return result;
	}

	public onSubmit(): void {
		if (this.editCourseForm.invalid) {
			this.editCourseForm.markAllAsTouched();
			return;
		}

		this.router.navigate(['courses']);
	}

	public onCancel(): void {
		this.router.navigate(['courses']);
	}

	ngOnInit(): void {
		const { title, creationDate, duration, description } = this.courseService.getEditCourse();
		this.editCourseForm = this.newCourseFormBuilder.group({
			title: [title, [Validators.required, Validators.minLength(5)]],
			description: [description, [Validators.required, Validators.minLength(15)]],
			duration: [duration, [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(2)]],
			date: [creationDate, [Validators.required]],
			authors: ['', [Validators.required, Validators.pattern(/^[A-zА-я -]*$/), Validators.minLength(7)]],
		});
	}
}
