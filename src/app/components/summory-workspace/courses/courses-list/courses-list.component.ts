import { Component, OnInit } from '@angular/core';
import { COURSES } from 'src/app/common/constants/courses.mock';
import { ICourse } from 'src/app/common/models/course.models';

@Component({
	selector: 'app-courses-list',
	templateUrl: './courses-list.component.html',
	styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
	public courses: ICourse[] = COURSES;

	constructor() {}

	public deleteCourse(idCourse: string): void {
		this.courses = [...this.courses].filter(({ id }) => idCourse !== id);
	}

	ngOnInit(): void {}
}
