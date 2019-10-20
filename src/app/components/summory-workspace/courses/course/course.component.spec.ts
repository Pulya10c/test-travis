import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ICourse } from 'src/app/common/models/course.models';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
	template: `
		<app-course *ngFor="let course of courses" [course]="course" (deleteСourseId)="deleteCourse($event)"></app-course>
	`,
})
class TestMockComponent {
	courses: ICourse[] = [
		{
			id: '5d08bea47e85e353cadda16c',
			title: 'Video Course 1. TypeScript',
			creationDate: new Date('2018-12-17'),
			duration: 216000,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			id: '5d08bea4f975b3057ef940df',
			title: 'Video Course 2. WebPack',
			creationDate: new Date('2018-03-10'),
			duration: 6000,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
	];

	constructor() {}
	public deleteCourse(idCourse: string): void {
		this.courses = [...this.courses].filter(({ id }) => idCourse !== id);
	}
}

describe('CourseComponent', () => {
	let component: TestMockComponent;
	let fixture: ComponentFixture<TestMockComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CourseComponent, TestMockComponent],
			imports: [RouterTestingModule],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestMockComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
