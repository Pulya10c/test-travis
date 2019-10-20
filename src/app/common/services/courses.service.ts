import { Injectable } from '@angular/core';
import { ICourse } from '../models/course.models';

@Injectable({
	providedIn: 'root',
})
export class CoursesService {
	protected course: ICourse = {
		id: '',
		title: '',
		creationDate: null,
		duration: 0,
		description: '',
	};
	constructor() {}

	public setEditCourse(data: ICourse): void {
		this.course = data;
	}

	public getEditCourse(): ICourse {
		return this.course;
	}
}
