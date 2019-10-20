import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelComponent } from './control-panel.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';

@Component({ selector: 'mat-icon', template: '' })
export class MockMatIconComponent {}

describe('ControlPanelComponent', () => {
	let component: ControlPanelComponent;
	let fixture: ComponentFixture<ControlPanelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ControlPanelComponent, MockMatIconComponent],
			imports: [RouterTestingModule],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ControlPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
