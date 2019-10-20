import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({ selector: 'app-control-panel', template: '' })
export class MockControlComponent {}

@Component({ selector: 'app-course', template: '' })
export class MockCourseComponent {}

@Component({ selector: 'app-load-more-courses', template: '' })
export class MockMoreCoursesComponent {}

describe('CoursesListComponent', () => {
	let component: CoursesListComponent;
	let fixture: ComponentFixture<CoursesListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CoursesListComponent, MockControlComponent, MockCourseComponent, MockMoreCoursesComponent],
			imports: [],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CoursesListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
