import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Directive, Input, HostListener, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { AppComponent } from 'src/app/root/app.component';

@Component({ selector: 'mat-icon', template: '' })
export class MockIconComponent {}

@Directive({
	selector: '[routerLink]',
})
export class RouterLinkDirectiveStub {
	@Input('routerLink') public linkParams: any;
	public navigatedTo: any = undefined;

	@HostListener('click')
	public onClick(): void {
		this.navigatedTo = this.linkParams;
	}
}

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent, HeaderComponent, MockIconComponent, RouterLinkDirectiveStub],
			imports: [],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		component.user = null;
		fixture.detectChanges();
	});

	it('should create', () => {
		console.dir(component);
		expect(component).toBeTruthy();
	});
});
