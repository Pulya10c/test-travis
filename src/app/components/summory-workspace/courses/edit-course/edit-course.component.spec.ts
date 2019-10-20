import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseComponent } from './edit-course.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EditCourseComponent', () => {
	let component: EditCourseComponent;
	let fixture: ComponentFixture<EditCourseComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EditCourseComponent],
			imports: [RouterTestingModule, BrowserModule, FormsModule, ReactiveFormsModule],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EditCourseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
