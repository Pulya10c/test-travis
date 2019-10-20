import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({ selector: 'app-header', template: '' })
export class MockHeaderComponent {}

@Component({ selector: 'app-footer', template: '' })
export class MockFooterComponent {}

@Component({ selector: 'router-outlet', template: '' })
export class MockRouterComponent {}

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent, MockHeaderComponent, MockFooterComponent, MockRouterComponent],
			imports: [],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it('should has class "header', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('.bitbucket').innerHTML).toContain('header');
	});

	it('should has class "content"', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('.bitbucket').innerHTML).toContain('content');
	});

	it('should has class "footer"', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('.bitbucket').innerHTML).toContain('footer');
	});
});
