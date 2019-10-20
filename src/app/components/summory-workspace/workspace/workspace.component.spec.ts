import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkspaceComponent } from './workspace.component';
import { Component, NO_ERRORS_SCHEMA, Directive, Input } from '@angular/core';

@Component({ selector: 'app-breadcrumbs', template: '' })
export class MockBreadcrumbsComponent {}

@Component({ selector: 'router-outlet', template: '' })
export class MockRouterOutletComponent {}

describe('WorkspaceComponent', () => {
	let component: WorkspaceComponent;
	let fixture: ComponentFixture<WorkspaceComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WorkspaceComponent, MockBreadcrumbsComponent, MockRouterOutletComponent],
			imports: [RouterTestingModule],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WorkspaceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		console.log(component);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
