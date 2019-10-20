import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddCourseComponent', () => {
	let component: AddCourseComponent;
	let fixture: ComponentFixture<AddCourseComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AddCourseComponent],
			imports: [RouterTestingModule, BrowserModule, FormsModule, ReactiveFormsModule],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddCourseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
