import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from 'src/app/common/models/course.models';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/common/services/courses.service';

@Component({
	selector: 'app-course',
	templateUrl: './course.component.html',
	styleUrls: ['./course.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {
	@Input() public course: ICourse;
	@Output() public deleteСourseId: EventEmitter<string> = new EventEmitter<string>();

	constructor(public router: Router, public serviceCourse: CoursesService) {}

	public deleteCourse(id: string): void {
		this.deleteСourseId.emit(id);
	}

	public editCourse(course: ICourse): void {
		this.serviceCourse.setEditCourse(course);
		this.router.navigate(['courses/edit']);
	}

	ngOnInit(): void {}
}
